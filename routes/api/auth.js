const express = require('express');
const passport = require('passport');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => res.send('Auth route'));

module.exports = router;
