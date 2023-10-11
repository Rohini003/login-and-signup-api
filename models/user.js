const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});


// Static method to find a user by email and password
userSchema.statics.findByEmailAndPassword = async function (email, password) {
  const user = await this.findOne({ email }).exec();

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = user.matchPassword(password);

  if (!isPasswordMatch) {
    throw new Error('Incorrect Password');
  }

  return user;
};

// Instance method to validate the password
userSchema.methods.matchPassword = function (password) {
  return password === this.password;
};

const User = mongoose.model('user1', userSchema, 'user1');

module.exports = User;
