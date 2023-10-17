const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String ,
    unique: true,
  },
  password: {
    type: String,
  },
  roll_Number:{
    type: Number,
    unique:true,
  },
  dept_ID:{
    type: Number,
  },
});


const User = mongoose.model('User', userSchema, 'User');

module.exports = User
