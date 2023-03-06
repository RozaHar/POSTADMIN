const express = require("express");
const { getAllUsers } = require("../controllers/admin.users.controllers");
const adminUsersRouter = express.Router();

adminUsersRouter.get("/", getAllUsers);

module.exports = adminUsersRouter;
