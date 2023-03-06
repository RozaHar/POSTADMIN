const { getAllUsersAdmin } = require("../models/admin.users.models");

async function getAllUsers(req, res) {
  return res.status(200).json(await getAllUsersAdmin());
}

module.exports = { getAllUsers };
