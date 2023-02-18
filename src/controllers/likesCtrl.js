const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../utils/errorResponse");
const Post = require("../models/Post");
const User = require("../models/User");

// @desc    Like a post
// @route   PUT /api/posts/:postId/like
// @access  Private
const likePost = asyncHandler(async (req, res, next) => {
  const postId = req.query.postId;
  const userId = req.user._id;

  // Find the post
  const post = await Post.findById(postId);
  if (!post) {
    return next(new ErrorResponse(`Post not found with id of ${postId}`, 404));
  }

  // Check if the user has already liked the post
  let userLikesPost = post.likes.find(
    (like) => like.user.toString() === userId.toString()
  );

  // If the user has already liked the post, unlike it
  if (userLikesPost) {
    post.likes = post.likes.filter(
      (like) => like.user.toString() !== userId.toString()
    );
  } else {
    // Otherwise, like the post
    post.likes.push({ user: userId });
  }

  // Save the post
  await post.save();

  res.status(200).json({
    success: true,
    data: post.likes,
  });
});
const reactToPost = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user._id;
  const { reaction } = req.body;

  // Find the post
  const post = await Post.findById(postId);
  if (!post) {
    return next(new ErrorResponse(`Post not found with id of ${postId}`, 404));
  }

  // Check if the user has already reacted to the post
  let userReacted = post.reactions.find(
    (reaction) => reaction.user.toString() === userId.toString()
  );

  // If the user has already reacted to the post, edit their reaction
  if (userReacted) {
    post.reactions = post.reactions.map((reaction) => {
      if (reaction.user.toString() === userId.toString()) {
        return { user: userId, reaction };
      }
      return reaction;
    });
  } else {
    // Otherwise, add a new reaction
    post.reactions.push({ user: userId, reaction });
  }

  // Save the post
  await post.save();

  res.status(200).json({
    success: true,
    data: post.reactions,
  });
});

// @desc    Un


module.exports = {likePost};