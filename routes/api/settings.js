const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

const User = require("../../models/User");

router.post("/two-factor-auth", auth, async (req, res) => {
  const { two_fa } = req.body;

  try {
    const user = await User.findById(req.user.id);

    user.two_fa = two_fa;

    await user.save();

    res.json(two_fa);
  } catch (error) {
    console.error(error);

    return res.json({ errors: [{ msg: "Server Error" }] });
  }
});

module.exports = router;
