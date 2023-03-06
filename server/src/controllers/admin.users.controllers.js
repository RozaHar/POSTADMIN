const {
  getAllUsersAdmin,
  updateUserCategory,
} = require("../models/admin.users.models");

async function getAllUsers(req, res) {
  return res.status(200).json(await getAllUsersAdmin());
}

async function updateCategory(req, res) {
  const id = req.params.id;
  const user = req.body;
  await updateUserCategory(id, user);
  console.log(user, "category");
  return res.status(200).json(user);
}
module.exports = { getAllUsers, updateCategory };
