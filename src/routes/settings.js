const express = require("express");
const router = express.Router();
const {
  updatePrivacy,
  updatePostPrivacy,
  getAllPrivacies,
} = require("../controllers/settingsCtrl");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);

// Update privacy for different types
router.route("/privacies").get(getAllPrivacies);
router.route("/update-privacy").put(updatePrivacy);

// Update post privacy
router.route("/update-post-privacy").put(updatePostPrivacy);

module.exports = router;
