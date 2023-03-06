const express = require("express");
const {
  newAdminPost,
  getAll,
  updatePost,
  deleteAdminPost,
  ById,
} = require("../controllers/admin.posts.controllers");
const adminPostsRouter = express.Router();

adminPostsRouter.post("/", newAdminPost);
adminPostsRouter.get("/:id", ById);
adminPostsRouter.get("/", getAll);
adminPostsRouter.put("/:id", updatePost);
adminPostsRouter.delete("/:id", deleteAdminPost);

module.exports = adminPostsRouter;
