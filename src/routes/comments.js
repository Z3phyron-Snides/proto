const express = require("express");
const { addComment, editComment, deleteComment } = require("./controllerName");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.route("/:postId/comments").post(verifyToken, addComment);

router
  .route("/:postId/comments/:commentId")
  .put(verifyToken, editComment)
  .delete(verifyToken, deleteComment);

module.exports = router;
