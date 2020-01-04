const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Scob = require("../../models/Scob");
const User = require("../../models/User");

// @route    POST api/scobs
// @desc     Create a scob
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { text } = req.body;

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newScob = new Scob({
        text,
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        user: req.user.id
      });

      const scob = await newScob.save();

      res.json(scob);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/scobs
// @desc     Get all scobs
// @access   Public
router.get("/", async (req, res) => {
  try {
    const scobs = await Scob.find().sort({ date: -1 });
    res.json(scobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/scobs/user/:username
// @desc     Get all scobs by username
// @access   Public
router.get("/user/:username", async (req, res) => {
  try {
    const scobs = await Scob.find({ username: req.params.username }).sort({
      date: -1
    });

    res.json(scobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/scobs/:id
// @desc     Get scob by ID
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    const scob = await Scob.findById(req.params.id);

    // Check for ObjectId format and scob
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !scob) {
      return res.status(404).json({ msg: "Scob not found" });
    }

    res.json(scob);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/scobs/:id
// @desc     Delete a scob
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const scob = await Scob.findById(req.params.id);

    // Check for ObjectId format and scob
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !scob) {
      return res.status(404).json({ scob: "Scob not found" });
    }

    // Check user
    if (scob.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await scob.remove();

    res.json({ msg: "Scob removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
