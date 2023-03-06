const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
  } = require("../models/user.models");

async function AllUsers(req, res)  {
  try {
    // const users = await getAllUsers();
    // res.json({ data: users, status: "success" });
    return res.status(200).json(await getAllUsers());
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
async function postUser(req, res)  {
  try {
    const user = req.body;
    await createUser(user);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  } 
};

async function userById(req, res) {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    return res.status(200).json(user);
    
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

async function updateUsers(req, res){
  try {
    const id = req.params.id
    const user = req.body;
    await updateUser(id, user);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
};

async function deleteUsersById(req, res){
  try {
    const id =  req.params.id;
    await deleteUser(id);
    return res.status(200).json({
      success: "user deleted id "
    });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { AllUsers,postUser,userById,updateUsers,deleteUsersById }