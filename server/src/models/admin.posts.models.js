const adminPosts = require("./admin.posts.mongo");
const lastPostId = 0;

async function saveAdminPost(post) {
  return await adminPosts.updateOne(
    {
      postId: post.postId,
    },
    post,
    { upsert: true }
  );
}

async function lastPostById() {
  const lastId = await adminPosts.findOne().sort("-postId");

  if (!lastId) {
    return lastPostId;
  }

  return lastId.postId;
}

async function addAdminPosts(post) {
  const lastId = (await lastPostById()) + 1;

  const newAdminPOst = Object.assign(post, {
    postId: lastId,
  });
  saveAdminPost(newAdminPOst);
}

module.exports = { addAdminPosts };
