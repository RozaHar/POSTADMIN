const express = require("express");
const adminPostsRouter = require("./routers/admin.posts.routers");
const app = express();
app.use(express.json());

app.use("/admin/posts", adminPostsRouter);
module.exports = app;
