const adminUsers = require("./user.mongo");

async function getAllUsersAdmin() {
  return await adminUsers.find({}, { __v: 0 });
}

module.exports = { getAllUsersAdmin };
