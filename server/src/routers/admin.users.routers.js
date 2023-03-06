const express = require("express");
const {
  getAllUsers,
  updateCategory,
} = require("../controllers/admin.users.controllers");
const adminUsersRouter = express.Router();

adminUsersRouter.get("/", getAllUsers);
adminUsersRouter.put("/:id", updateCategory);

module.exports = adminUsersRouter;
