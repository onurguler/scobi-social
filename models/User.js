const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  facebookId: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  notifications: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      name: { type: String },
      avatar: { type: String },
      msg: { type: String },
      slug: { type: String },
      post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  two_fa: { type: Boolean },
  date: {
    type: Date,
    default: Date.now
  }
  // bookmarks: [{ post: { type: mongoose.Schema.Types.ObjectId, ref: "post" } }]
});

module.exports = User = mongoose.model("user", UserSchema);
