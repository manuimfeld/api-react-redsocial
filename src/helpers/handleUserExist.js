const { usersModel } = require("../models");

const userExist = async (req, res) => {
  let existEmail = await usersModel.findOne({ email: req.body.email });
  let existUsername = await usersModel.findOne({ username: req.body.username });
  if (existEmail) {
    return "ERROR_EMAIL_ALREADY_EXIST";
  } else if (existUsername) {
    return "ERROR_USERNAME_ALREADY_EXIST";
  } else {
    return false;
  }
};

module.exports = { userExist };
