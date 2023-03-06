const http = require("http");

const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./src/app");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
const Mongo_Url = process.env.MONGO_URL_PASSWORD;
mongoose.connection.once("open", () => {
  console.log(`Mongoose connect your work`);
});

mongoose.connection.on("error", () => {
  console.log(`Mongoose error`);
});

async function StartServer() {
  await mongoose.connect(Mongo_Url);

  server.listen(PORT, () => {
    console.log(`Server listen to ${PORT}`);
  });
}

StartServer();
