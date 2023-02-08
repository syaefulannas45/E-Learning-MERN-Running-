const User = require("../../api/users/model");
const { BadRequestError } = require("../../errors");

const createUser = async (req) => {
  const { nama, email, password, role, username } = req.body;

  const users = await User.create({
    nama,
    email,
    password,
    role,
    username,
    avatar: req.file ? `uploads/${req.file.filename}` : `uploads/avatar/default.jpeg`,
  });

  delete users._doc.password;
  return users;
};

const getAllUsers = async () => {
  const result = await User.find();

  return result;
};

module.exports = { createUser, getAllUsers };