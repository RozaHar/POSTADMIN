const mongoose = require("mongoose");

const adminPostsSchema = mongoose.Schema({
  postId: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  target: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admin/Posts", adminPostsSchema);
