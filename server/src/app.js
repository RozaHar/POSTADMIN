const express = require("express");
const app = express();
const userRouter = require("./routers/user.routers");
app.use(express.json());
app.use("/users", userRouter);

module.exports = app;