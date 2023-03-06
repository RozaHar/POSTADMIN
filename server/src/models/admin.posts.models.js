const adminPosts = require("./admin.posts.mongo");
const lastPostId = 0;

async function getAllAdminPosts() {
  return await adminPosts.find({}, { __v: 0 }).sort("-postId");
}
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

async function updateAdminPost(id, post) {
  const updatePOST = await adminPosts.findByIdAndUpdate({ _id: id }, post, {
    new: true,
  });
  saveAdminPost(updatePOST);
}

async function destroyAdminPost(id) {
  return await adminPosts.findByIdAndDelete({ _id: id });
}

async function getById(id) {
  return await adminPosts.findById({ _id: id });
}

module.exports = {
  addAdminPosts,
  getAllAdminPosts,
  updateAdminPost,
  destroyAdminPost,
  getById,
};
