const express = require("express");
const {
  CreatePost,
  GetNewsFeed,
  GetPost,
  GetTimeline,
  updateSinglePostPrivacy,
  likePost,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/postCtrl");
const handleMedia = require("../middlewares/handleMedia");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/", GetPost);

router.use(verifyToken);

router.post("/", handleMedia, CreatePost);
router.put("/comment", addComment);
router.put("/comment/update", updateComment);
router.delete("/comment/delete", deleteComment);

router.get("/newsfeed", GetNewsFeed);
router.get("/:id/timeline", GetTimeline);
router.get("/:id/like", likePost);
router.put("/:id/privacy", updateSinglePostPrivacy);

module.exports = router;
