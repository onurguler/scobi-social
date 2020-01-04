const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../../models/User");
const Profile = require("../../models/Profile");
const { generateUniqueUsername } = require("../../utils/utils");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("username", "Username is required").exists(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      }

      user = await User.findOne({ username });

      if (user) {
        const propsedName = await generateUniqueUsername(username);

        return res
          .status(400)
          .json({ errors: [{ msg: "Username already taken. You can try " + propsedName }] });
      }

      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

      user = User({ name, username, email, password, avatar, two_fa: true });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      const profile = new Profile({
        user: user.id
      });

      await profile.save();

      await user.save();

      const payload = {
        user: { id: user.id }
      };

      const token = jwt.sign(payload, config.get("jwtSecret"), { expiresIn: 360000 });

      return res.json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
