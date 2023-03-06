const express = require("express");
const {
  AllUsers,
  postUser,
  userById,
  updateUsers,
  deleteUsersById,
} = require("../controllers/user.controllers");
 
const router = express.Router();
router.get('/:id',userById);
router.get('/', AllUsers);
router.post('/', postUser);
router.put('/:id', updateUsers);
router.delete('/:id',deleteUsersById)

 
module.exports = router;