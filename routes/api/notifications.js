const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route    GET api/notifications
// @desc     Get users notifications
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    return res.json({ notifications: user.notifications });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
