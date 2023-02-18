const asyncHandler = require("express-async-handler");
const ErrorResponse = require("../utils/errorResponse");
const Post = require("../models/Post");
const User = require("../models/User");

const addComment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;


  try {

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

const editComment = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { postId, commentId } = req.params;
  const { text } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ msg: "Post not found" });

    // Check if the comment exists
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );
    if (commentIndex === -1)
      return res.status(404).json({ msg: "Comment not found" });

    // Check if user is the author of the comment
    const comment = post.comments[commentIndex];
    if (comment.user.toString() !== userId)
      return res.status(401).json({ msg: "Unauthorized to edit this comment" });

    // Update the comment
    post.comments[commentIndex].text = text;
    await post.save();
    res.json(post.comments[commentIndex]);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

const deleteComment = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { postId, commentId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ msg: "Post not found" });

    // Check if the comment exists
    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.toString() === commentId
    );
    if (commentIndex === -1)
      return res.status(404).json({ msg: "Comment not found" });

    // Check if user is the author of the comment
    const comment = post.comments[commentIndex];
    if (comment.user.toString() !== userId)
      return res
        .status(401)
        .json({ msg: "Unauthorized to delete this comment" });

    // Remove the comment
    post.comments.splice(commentIndex, 1);
    await post.save();
    res.json({ msg: "Comment removed" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = { addComment, editComment, deleteComment };
