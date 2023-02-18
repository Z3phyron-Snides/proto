const express = require("express");
const { createConversation, getConversations, getMessages, sendMessage } = require("../controllers/chatCtrl");
// const handleChatMedia = require("../middlewares/handleChatMedia");
const handleMedia = require("../middlewares/handleMedia");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(verifyToken);

router.route("/conversation").get(createConversation);
router.route("/recents").get(getConversations);
router.route("/message").get(getMessages)

router.post("/message", handleMedia, sendMessage);


// router
//   .route("/:postId/comments/:commentId")
 

module.exports = router;
