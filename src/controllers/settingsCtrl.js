const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../utils/errorResponse");
const Post = require("../models/post");
const User = require("../models/user");

const getAllPrivacies = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const { privacy, postPrivacy } = user;

  const privacies = [
    { name: "privacy", value: privacy },
    { name: "postPrivacy", value: postPrivacy },
  ];
  res.status(200).send({ privacies });
});

const updatePrivacy = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const data = req.body;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const userFields = Object.keys(User.schema.obj);
  for (const key in data) {
    if (!userFields.includes(key))
      return res.status(400).send({ message: `Invalid key: ${key}` });

    if (key === "privacy") {
      user[key] = data[key];
    } else if (key === "postPrivacy") {
      user[key] = data[key];
    } else if (key === "friends") {
      user.friends.privacy = data[key];
    } else {
      user[key] = data[key];
    }
  }

  await user.save();
  const { privacy, postPrivacy } = user;

  const privacies = [
    { name: "privacy", value: privacy },
    { name: "postPrivacy", value: postPrivacy },
  ];
  res.status(200).send({ privacies });
});

const updatePostPrivacy = asyncHandler(async (req, res) => {
  const { email, postPrivacy } = req.body;

  const user = await User.findOneAndUpdate(
    { email },
    { postPrivacy },
    { new: true, runValidators: true }
  );
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send({ user });
});

module.exports = {
  getAllPrivacies,

  updatePrivacy,

  updatePostPrivacy,
};
