const { json } = require("express");
const {
  addAdminPosts,
  getAllAdminPosts,
  updateAdminPost,
  destroyAdminPost,
} = require("../models/admin.posts.models");

async function getAll(req, res) {
  return res.status(200).json(await getAllAdminPosts());
}

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

async function updatePost(req, res) {
  const id = req.params.id;
  const post = req.body;
  if (!id) {
    return res.status(404).json({
      error: "not admin post id",
    });
  }

  if (!post.title || !post.author || !post.target) {
    res.status(404).json({
      error: "not added admin post",
    });
  }

  updateAdminPost(id, post);
  return res.status(200).json(post);
}

async function deleteAdminPost(req, res) {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({
      error: "not admin post id",
    });
  }

  await destroyAdminPost(id);
  return res.status(200).json({ success: "deleted admin post" });
}

module.exports = { newAdminPost, getAll, updatePost, deleteAdminPost };
