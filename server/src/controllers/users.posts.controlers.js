const { getPosts } = require("../models/users.posts.models");

async function getAllPosts(req, res) {
  return res.status(200).json(await getPosts());
}

module.exports = { getAllPosts };
