const express = require("express");
const {
  SignUp,
  SignIn,
  SignOut,
  RefreshToken,
  GetUser,
  GetMe,
  updateUser,
  updateCoverImage,
  GetMedias,
} = require("../controllers/userCtrl");
const handleImage = require("../middlewares/imageHandler");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.route("/auth/sign-up").post(SignUp);
router.route("/auth/sign-in").post(SignIn);

router.route("/auth/sign-out").get(SignOut);
router.route("/auth/refresh").get(RefreshToken);
router.get("/medias", GetMedias);


router.use(verifyToken);
router.route("/auth/update").put(updateUser);

router.route("/me").get(GetMe);
router.route("/:id").get(GetUser);

// router.use()

router.route("/auth/coverImage").put(handleImage, updateCoverImage);

module.exports = router;
