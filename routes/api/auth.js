const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const User = require('../../models/User');
const auth = require('../../middleware/auth');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & return token
// @access  Public
router.post(
  '/',
  [check('email', 'Please enter a valid email').isEmail(), check('password', 'Password is required').exists()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials. ' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials. ' }] });
      }

      const payload = {
        user: { id: user.id }
      };

      const token = jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      });

      return res.json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/auth/google
// @desc    Authencitation user with google
// @access  Public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
  })
);

// @route   GET api/auth/google/callback
// @desc    Authentication user with google and return token
// @access  Public
// @TODO: failure redirect react client login page
router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/login'
  }),
  async (req, res) => {
    // @TODO: Redirect domain react client home page

    const payload = {
      user: { id: req.user.id }
    };

    const token = await jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    });

    return res.redirect('http://localhost:3000?token=' + token);
  }
);

// @route   GET api/auth/google
// @desc    Authencitation user with google
// @access  Public
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email']
  })
);

// @route   GET api/auth/facebook
// @desc    Authencitation user with facebook
// @access  Public
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/login'
  }),
  async (req, res) => {
    // @TODO: Redirect react client home page

    const payload = {
      user: { id: req.user.id }
    };

    const token = await jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    });

    return res.redirect('http://localhost:3000?token=' + token);
  }
);
module.exports = router;
