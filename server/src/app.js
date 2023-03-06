const express = require("express");
const adminPostsRouter = require("./routers/admin.posts.routers");
const adminUsersRouter = require("./routers/admin.users.routers");
const userRouter = require("./routers/user.routers");
const userPostsRouter = require("./routers/users.posts.routers");
const app = express();

app.use(express.json());
app.use("/users/posts", userPostsRouter);
app.use("/users", userRouter);
app.use("/admin/posts", adminPostsRouter);
app.use("/admin/users", adminUsersRouter);
module.exports = app;
