const express = require("express");
const { newAdminPost } = require("../controllers/admin.posts.controllers");
const adminPostsRouter = express.Router();

adminPostsRouter.post("/", newAdminPost);

module.exports = adminPostsRouter;
