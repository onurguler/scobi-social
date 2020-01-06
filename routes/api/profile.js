const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "username", "avatar", "bookmarks", "bookmarks.post"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/user/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select("id");
    if (!user) return res.status(400).json({ errors: [{ msg: "User not found" }] });

    const profile = await Profile.findOne({
      user: user.id
    })
      .populate("user", ["name", "username", "avatar"])
      .populate("following.user", ["name", "username", "avatar"])
      .populate("followers.user", ["name", "username", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/profile/follow/:username
// @desc     Follow user by username
// @access   Private
router.put("/follow/:username", auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User Not Found" }] });
    }
    if (user.id.toString() === req.user.id) {
      return res.status(400).json({ errors: [{ msg: "Self Follow Error" }] });
    }

    const source = await Profile.findOne({ user: req.user.id });
    const sourceUser = await User.findById(req.user.id);
    const target = await Profile.findOne({ user: user.id });

    if (
      source.following.filter(userDb => userDb.user.toString() === user.id.toString()).length > 0
    ) {
      return res.status(400).json({ errors: [{ msg: "User Already Following" }] });
    }

    source.following.unshift({ user: user.id });
    target.followers.unshift({ user: req.user.id });

    user.notifications.unshift({
      user: req.user.id,
      name: sourceUser.name,
      avatar: sourceUser.avatar,
      msg: "follow you.",
      slug: `/@${sourceUser.username}`,
      post: null
    });

    await user.save();
    await source.save();
    await target.save();

    const returnData = await Profile.findOne({ user: user.id });

    res.json({ followers: returnData.followers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/profile/unfollow/:username
// @desc     Unfollow user by username
// @access   Private
router.put("/unfollow/:username", auth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User Not Found" }] });
    }
    if (user.id.toString() === req.user.id) {
      return res.status(400).json({ errors: [{ msg: "Self Unfollow Error" }] });
    }

    const source = await Profile.findOne({ user: req.user.id });
    const target = await Profile.findOne({ user: user.id });

    if (
      source.following.filter(userDb => userDb.user.toString() === user.id.toString()).length === 0
    ) {
      return res.status(400).json({ errors: [{ msg: "Not Yet Been Following" }] });
    }

    const removeIndexFollowing = source.following
      .map(follow => follow.user.toString())
      .indexOf(user.id);

    const removeIndexFollowers = target.followers
      .map(follower => follower.user.toString())
      .indexOf(req.user.id);

    source.following.splice(removeIndexFollowing, 1);
    target.followers.splice(removeIndexFollowers, 1);

    await source.save();
    await target.save();

    res.json({ followers: target.followers });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
