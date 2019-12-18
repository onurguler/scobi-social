const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  name: {
    type: String,
    required: true
  },
<<<<<<< HEAD
  username: {
    type: String,
    required: true,
    unique: true
=======
  facebookId: {
    type: String
>>>>>>> origin/egeckmk
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
