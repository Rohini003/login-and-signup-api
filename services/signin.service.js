const User = require('../models/user.js');

exports.findByEmailAndPassword = async function (data) {
  let email = data.email;
  let password = data.password;

  const user = await User.findOne({ email, password }).exec()

  console.log(user, "user");

  
  if (user != null && user.lenght > 0 ) {
    throw new Error('User not found');
  }
  
  if (user.password !== password) {
    throw new Error('Incorrect Password');
  }

  return true;
}

// Export the User model
// module.exports = findByEmailAndPassword;
