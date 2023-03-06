const express = require("express");
const adminPostsRouter = require("./routers/admin.posts.routers");
const app = express();
const userRouter = require("./routers/user.routers");
app.use(express.json());
app.use("/users", userRouter);

app.use("/admin/posts", adminPostsRouter);
module.exports = app;
