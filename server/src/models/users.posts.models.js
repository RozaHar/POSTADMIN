const userPosts = require("./admin.posts.mongo");

async function getPosts() {
  return await userPosts.find({}, { _id: 0, __v: 0 });
}

module.exports = { getPosts };
