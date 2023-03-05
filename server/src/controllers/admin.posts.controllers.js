const { addAdminPosts } = require("../models/admin.posts.models");

async function newAdminPost(req, res) {
  const post = req.body;
  if (!post.title || !post.author || !post.target) {
    res.status(404).json({
      error: "not added admin post",
    });
  }
  await addAdminPosts(post);
  return res.status(200).json(post);
}

module.exports = { newAdminPost };
