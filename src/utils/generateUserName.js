const User = require("../models/user");


const generateUsername = (firstName, lastName, email) => {
  let username = "";
  const options = [
    firstName + lastName,
    firstName,
    lastName,
    email.split("@")[0],
  ];
  username = options[Math.floor(Math.random() * options.length)];

    if (!username) return "";
    const users = User.find()

  if (users.includes(username)) {
    for (let i = 1; i <= 999; i++) {
      const newUsername = username + i;
      if (!users.includes(newUsername)) {
        username = newUsername;
        break;
      }
    }
  }

 
  return username;
};

module.exports = generateUsername;
