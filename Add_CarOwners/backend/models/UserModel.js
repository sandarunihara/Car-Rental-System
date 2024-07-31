<<<<<<< HEAD
const mongoose=require('mongoose');
=======
const mongoose = require('mongoose');
>>>>>>> 23d9d7a4fb0b91de0c2d51d1365e3883ff3eac53
const Schema = mongoose.Schema;

const UserSchema = new Schema({
username:{
    type: String,
    required: true
},

email:{
    type: String,
    required: true
},

password:{
    type: String,
    required: true
},


})

const User = mongoose.model("User",UserSchema);

<<<<<<< HEAD
module.exports=User
=======
module.exports = User;
>>>>>>> 23d9d7a4fb0b91de0c2d51d1365e3883ff3eac53
