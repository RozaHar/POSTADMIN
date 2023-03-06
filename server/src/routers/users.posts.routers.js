const express = require("express");
const { getAllPosts } = require("../controllers/users.posts.controlers");
const userPostsRouter = express.Router();

userPostsRouter.get("/", getAllPosts);

module.exports = userPostsRouter;
