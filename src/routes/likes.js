const express = require("express");
const { likePost } = require("../controllers/likesCtrl");
const router = express.Router();



// Like a post
router.put("/:postId/like", likePost);

// React to a post
// router.put("/:postId/react", asyncHandler(reactToPost));

module.exports = router;
