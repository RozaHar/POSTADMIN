const users = require("./user.mongo");
const lastId = 0;
async function getAllUsers() {
    return await users.find({}, {__v: 0 }).sort("-userId");
}

async function lastUserId() {
  const last_user_id = await users.findOne().sort("-userId");
  if (!last_user_id) {
    return lastId;
  }

  return last_user_id.userId;
}

async function getUserById(id){
  return await users.findById({_id : id})
}

async function saveUsers(user) {
  return await users.updateOne(
    {
      userId: user.userId,
    },
    user,
    { upsert: true }
  );
}

async function createUser(user) {
  const last_user_id = (await lastUserId()) + 1;
  const newUser = Object.assign(user, {
    userId: last_user_id,
    category:'user',
  });

  await saveUsers(newUser);
}

async function updateUser(id, user) {
  const updated_user = await users.findByIdAndUpdate(
    { _id: id },
    user,{new: true}
  );

  saveUsers(updated_user);
}

async function deleteUser(id) {
  await users.findByIdAndDelete({ _id: id });
}



module.exports = {
  getAllUsers,
  createUser,
  saveUsers,
  updateUser,
  deleteUser,
  lastUserId,
  getUserById
};