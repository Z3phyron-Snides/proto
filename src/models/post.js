const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  altText: String,
});

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const reactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reaction: {
    type: String,
    enum: ["like", "love", "haha", "wow", "sad", "angry"],
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  privacy: {
    type: String,
    enum: ["only me", "friends only", "public"],
    default: "public",
  },
  taggedFriends: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  media: [mediaSchema],
  comments: [commentSchema],
  likes: [likeSchema],
  reactions: [reactionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
