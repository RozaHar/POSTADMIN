const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
  userId:{
  type:Number,
  required:true
},
  username: {
    type:String,
    required:true
  },

  lastname:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  
  category:{
    type:String,
    required:true,
    default : "user"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("User", userSchema);