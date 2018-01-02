var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  db.saveUser({ email, password });
  // save the user to the database
  // send the welcome email
};