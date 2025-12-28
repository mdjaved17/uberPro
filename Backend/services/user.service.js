const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("Required fields are missing");
  }
  const user = await userModel.create({
    fullname: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  return user;
};
