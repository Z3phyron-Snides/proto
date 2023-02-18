const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const Post = require("../models/post");

const CreatePost = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ msg: "User not found" });

    let newPost = new Post({
      user: user._id,

      ...req.body,
    });

    // if (req.body.taggedFriends && Array.isArray(req.body.taggedFriends)) {
    //   for (let i = 0; i < req.body.taggedFriends.length; i++) {
    //     const friendId = taggedFriends[i].value;
    //     console.log(friendId)
    //     newPost.taggedFriends.push({ user: friendId });
    //   }
    // }

    if (req.media) {
      let media = req.media.map((media) => {
        return {
          url: media.url,
          type: media.type,
          altText: media.url,
        };
      });
      newPost.media = media;
    }

    await newPost.save();
    const authorIds = await User.find({ friends: { $in: [userId] } }).select(
      "_id"
    );
    authorIds.push(userId);

    const feed = await Post.find({
      $or: [
        { privacy: "public" },
        { privacy: "friends only", user: { $in: authorIds } },
      ],
    })
      .populate("user", "_id userName profileImage")
      .sort({ createdAt: -1 });

    res.status(200).json({ feed });
  } catch (error) {
    res.status(500).json(error);
  }
});

const GetTimeline = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  console.log(req.params);

  try {
    const posts = await Post.find({
      $or: [
        {
          privacy: "public",
          user: { $in: [id] },
        },
        {
          privacy: "friends only",
          user: { $in: [id] },
        },
      ],
    })
      .sort({ createdAt: -1 })
      .populate("user", "_id userName profileImage friends")
      .populate("comments.user", "_id userName profileImage")
      .populate("likes.user", "_id userName profileImage")
      .populate("reactions.user", "_id userName profileImage");

    const feed = posts.filter((post) => {
      if (post.privacy === "friends only") {
        return post.user.friends.includes(userId);
      }
      return true;
    });

    res.status(200).json({ feed });
  } catch (error) {
    res.status(500).json(error);
  }
});

const GetNewsFeed = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  try {
    const authorIds = await User.find({ friends: { $in: [userId] } }).select(
      "_id"
    );
    authorIds.push(userId);

    const feed = await Post.find({
      $or: [
        { privacy: "public" },
        { privacy: "friends only", user: { $in: authorIds } },
      ],
    })
      .populate("user", "_id userName profileImage")
      .sort({ createdAt: -1 });

    res.status(200).json({ feed });
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc    Like a post
// @route   PUT /api/posts/:postId/like
// @access  Private
const likePost = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const userId = req.user.id;
  console.log(req.params);
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
    postId: post._id,
    likes: post.likes,
  });
});



const GetPost = asyncHandler(async (req, res) => {
  const postId = req.query.id;

  try {
    const post = await Post.findById(postId)
      .populate("user")
      .populate("comments.user", "-password");
    if (!post) return res.status(400).json({ msg: "Post not found" });

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json(error);
  }
});

const updateSinglePostPrivacy = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const privacy = req.body.privacy;

  const post = await Post.findByIdAndUpdate(postId, { privacy }, { new: true });
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }

  res.status(200).send({ post });
});

const addComment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const postId = req.query.id;
  const { text } = req.body;

  if (!text) {
    return next(new ErrorResponse("Comment text is required", 400));
  }

  try {
    const post = await Post.findById(postId).populate(
      "comments.user",
      "-password"
    );
    if (!post) {
      return next(new ErrorResponse("Post not found", 404));
    }

    const user = await User.findById(userId).select('-password');
    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    post.comments.unshift({ user: user, text });
    await post.save();

    res.status(201).json({
      success: true,
      postId: post._id,
      data: post.comments,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});
const updateComment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.query.id;
  const { text } = req.body;

  if (!text) {
    throw new Error("Comment text is required");
  }

  try {
    const post = await Post.findOne({ "comments._id": commentId }).populate(
      "comments.user",
      "-password"
    );

    // console.log(post)
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = post.comments.find(
      (comment) => comment._id.toString() === commentId
    );
    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.user.toString() !== userId && post.user.toString() !== userId) {
      throw new Error("Not authorized to update comment");
    }

    comment.text = text;
    await post.save();

    res.status(200).json({
      success: true,
      postId: post._id,
      data: comments,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

const deleteComment = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const commentId = req.query.id;

  try {
    const post = await Post.findOne({ "comments._id": commentId });
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = post.comments.find(
      (comment) => comment._id.toString() === commentId
    );
    if (!comment) {
      throw new Error("Comment not found");
    }

    if (comment.user.toString() !== userId && post.user.toString() !== userId) {
      throw new Error("Not authorized to delete comment");
    }

    comment.remove();
    await post.save();

    res.status(200).json({
      success: true,
      postId: post._id,
      data: post.comments,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});




module.exports = {
  CreatePost,

  GetNewsFeed,
  GetPost,
  GetTimeline,
  likePost,
  addComment,
  updateComment,
  deleteComment,
  updateSinglePostPrivacy,
};

// routes/posts.js
// const express = require("express");
// const router = express.Router();
// const Post = require("../models/post");
// const { protect, authorize } = require("../middleware/auth");

// router.post("/tag-friend", protect, authorize("user"), async (req, res) => {
//   const post = await Post.findById(req.body.postId);

//   if (!post) {
//     return res.status(404).json({ msg: "Post not found" });
//   }

//   post.taggedFriends.push(req.body.friendId);
//   await post.save();

//   res.json({ msg: "Friend tagged successfully" });
// });

// module.exports = router;
