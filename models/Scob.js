const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  text: {
    type: String,
    required: true
  },
  username: { type: String },
  name: { type: String },
  avatar: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Scob = mongoose.model("scob", ScobSchema);
