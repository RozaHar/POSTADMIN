const express = require("express");
const {
  newAdminPost,
  getAll,
  updatePost,
} = require("../controllers/admin.posts.controllers");
const adminPostsRouter = express.Router();

adminPostsRouter.post("/", newAdminPost);
adminPostsRouter.get("/", getAll);
adminPostsRouter.put("/:id", updatePost);

module.exports = adminPostsRouter;
