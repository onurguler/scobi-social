const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

const requestIp = require("request-ip");
const externalIp = require("externalip");

// inside middleware handler
const ipMiddleware = function(req, res, next) {
  const clientIp = requestIp.getClientIp(req);
  req.clientIp = clientIp;
  next();
};

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Title is required").exists(),
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
    const { title, subtitle, cover, text } = req.body;

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text,
        title,
        subtitle,
        cover,
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/posts
// @desc     Get all posts
// @access   Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts/user/:username
// @desc     Get all posts by username
// @access   Public
router.get("/user/:username", async (req, res) => {
  try {
    const posts = await Post.find({ username: req.params.username }).sort({
      date: -1
    });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Public
router.get("/:id", ipMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("likes.user", ["name", "username", "avatar"])
      .populate("dislikes.user", ["name", "username", "avatar"]);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const ip = req.clientIp;
    console.log(ip);
    console.log(req.connection.remoteAddress);

    if (post.views.filter(view => view.ip === ip).length === 0) {
      post.views.unshift({ ip });

      post.save();
    }

    // externalIp(async function(err, ip) {
    //   console.log(ip);
    //   if (post.views.filter(view => view.ip === ip).length === 0) {
    //     console.log(ip);
    //     post.views.unshift({ ip });

    //     await post.save();
    //   }
    // });

    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/dislike/:id
// @desc     Dislike a post
// @access   Private
router.put("/dislike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.dislikes.filter(dislike => dislike.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already disliked" });
    }

    post.dislikes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.dislikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/posts/undislike/:id
// @desc     Unlike a post
// @access   Private
router.put("/undislike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.dislikes.filter(dislike => dislike.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been disliked" });
    }

    // Get remove index
    const removeIndex = post.dislikes
      .map(dislike => dislike.user.toString())
      .indexOf(req.user.id);

    post.dislikes.splice(removeIndex, 1);

    await post.save();

    res.json(post.dislikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  "/comment/:id",
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

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        username: user.username,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/user/get/bookmarks", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("bookmarks.post");

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }

    res.json(user.bookmarks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.put("/bookmark/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User is not found" });
    }

    if (
      user.bookmarks.filter(bookmark => bookmark.post.toString() === post.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already bookmarked" });
    }
    user.bookmarks.unshift({ post: post.id });
    await user.save();
    console.log(user.bookmarks);
    return res.json(user.bookmarks);
  } catch (error) {
    console.log(error);
  }
});

router.put("/unbookmark/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User is not found" });
    }

    if (
      user.bookmarks.filter(bookmark => bookmark.post.toString() === post.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been bookmarked" });
    }

    // Get remove index
    const removeIndex = user.bookmarks
      .map(bookmark => bookmark.post.toString())
      .indexOf(post.id);

    user.bookmarks.splice(removeIndex, 1);

    await user.save();

    res.json(user.bookmarks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
