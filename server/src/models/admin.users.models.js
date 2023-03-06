const adminUsers = require("./user.mongo");
const { saveUsers } = require("./user.models");

async function getAllUsersAdmin() {
  return await adminUsers.find({}, { __v: 0 });
}

async function updateUserCategory(id, user) {
  const updateCategory = await adminUsers.findByIdAndUpdate({ _id: id }, user, {
    new: true,
  });
  console.log(updateCategory);
  saveUsers(updateCategory);
}

module.exports = { getAllUsersAdmin, updateUserCategory };
