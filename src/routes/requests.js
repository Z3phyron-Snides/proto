const express = require("express");
const router = express.Router();
const { sendRequest, acceptRequest, rejectRequest, GetRequests, getFriends } = require("../controllers/requestCtrl");
const verifyToken = require("../middlewares/verifyToken");

router.use(verifyToken);


router.get("/", getFriends);
router.get("/requests", GetRequests);
router.get("/send", sendRequest);
router.get("/accept", acceptRequest);
router.get("/reject", rejectRequest);

module.exports = router;
