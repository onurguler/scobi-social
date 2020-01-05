const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
const nodemailer = require("nodemailer");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../../models/User");
const auth = require("../../middleware/auth");

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password -bookmarks")
      .populate("notifications.post", ["title"]);
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user & return token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials. " }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials. " }] });
      }

      if (user.two_fa === true) {
        return res.json({ two_fa: user.two_fa, user: { id: user.id } });
      }

      const payload = {
        user: { id: user.id }
      };

      const token = jwt.sign(payload, config.get("jwtSecret"), {
        expiresIn: 360000
      });

      return res.json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/auth/google
// @desc    Authencitation user with google
// @access  Public
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);

// @route   GET api/auth/google/callback
// @desc    Authentication user with google and return token
// @access  Public
// @TODO: failure redirect react client login page
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login"
  }),
  async (req, res) => {
    // @TODO: Redirect domain react client home page

    const payload = {
      user: { id: req.user.id }
    };

    const token = await jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000
    });

    return res.redirect("http://scobi.social?token=" + token);
  }
);

// @route   GET api/auth/google
// @desc    Authencitation user with google
// @access  Public
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email"]
  })
);

// @route   GET api/auth/facebook
// @desc    Authencitation user with facebook
// @access  Public
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "/login"
  }),
  async (req, res) => {
    // @TODO: Redirect react client home page

    const payload = {
      user: { id: req.user.id }
    };

    const token = await jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000
    });

    return res.redirect("http://scobi.social?token=" + token);
  }
);

router.get("/totp-secret", (request, response, next) => {
  var secret = speakeasy.generateSecret({ length: 20 });
  response.json({ secret: secret.base32 });
});

router.post("/totp-generate", async (req, res, next) => {
  const { user_id, secret } = req.body;

  const user = await User.findById(user_id);

  if (!user) {
    return res.status(404).json({ errors: [{ msg: "User not found" }] });
  }

  const token = {
    token: speakeasy.totp({
      secret: secret,
      encoding: "base32"
    }),
    remaining: 180 - Math.floor((new Date().getTime() / 1000.0) % 30)
  };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "scobisocial@gmail.com",
      pass: "scobi123@@"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    to: user.email, // list of receivers
    subject: "Two Factor Authentication Scobi Social", // Subject line
    text: token.token
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.json({ secret });
});

router.post("/totp-validate", async (request, response, next) => {
  const { secret, token, user_id } = request.body;

  const user = await User.findById(user_id);

  if (!user) {
    console.log("user nor found");
    return response.status(404).json({ errors: [{ msg: "User not found" }] });
  }

  const valid = speakeasy.totp.verify({
    secret: secret,
    encoding: "base32",
    token: token,
    window: 0
  });

  if (!valid) {
    console.log("token not valid");
    return response.status(404).json({ errors: [{ msg: "Token is not valid" }] });
  }

  const payload = {
    user: { id: user.id }
  };

  const jwtToken = jwt.sign(payload, config.get("jwtSecret"), {
    expiresIn: 360000
  });

  return response.json({ token: jwtToken });
});

module.exports = router;
