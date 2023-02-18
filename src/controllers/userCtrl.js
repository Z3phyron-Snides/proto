const User = require("../models/user");
const Post = require("../models/post");
const { sendCookie } = require("../utils/sendCookie");
const asyncHandler = require("express-async-handler");
const { validateSignUp, validateSignIn } = require("../helpers/userValidator");

const SignUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  // Validate data before creating a user
  const { error } = validateSignUp(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res
      .status(400)
      .json({ error: `Error: user with email ${email} already exists!!!` });
  }

  // const user = await User.create({
  //   firstName,
  //   lastName,
  //   email,
  // });

  const user = new User({ firstName, lastName, email, password });

  await user.generateUsername();
  await user.generateProfileAndCover(lastName);
  await user.save();

  sendCookie(user, req, res);
});

const SignIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate data before logging in
  const { error } = validateSignIn(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res
      .status(400)
      .json({ error: `Error: no user with email ${email} found!!!` });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    res.status(400).json({ error: "Error: incorrect password" });
  }

  sendCookie(user, req, res);
});

// @desc    Refresh user token
// @route   POST /api/auth/refresh
// @access  Public
const RefreshToken = asyncHandler(async (req, res, next) => {
  console.log(req.cookies.jwt);
  const refreshToken = req.cookies.jwt;
  try {
    // const { refreshToken } = req.cookie;
    if (!refreshToken) throw createHttpError.BadRequest();
    const userId = await verifyRefreshToken(refreshToken);
    const accToken = await signAccessToken(userId);
    const refToken = await signRefreshToken(userId);

    // res.send({ accToken, refToken });
    res.send({
      accessToken: accToken,
    });
  } catch (error) {
    next(error);
  }
});

const GetUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let filteredUser = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      bio: user.bio,
      website: user.website,
      profileImage: user.profileImage,
      coverImage: user.coverImage,
    };

    let friends = [];
    for (let friend of user.friends) {
      let filteredFriend = {
        _id: friend._id,
        firstName: friend.firstName,
        lastName: friend.lastName,
        username: friend.username,
        email: friend.email,
        bio: friend.bio,
        website: friend.website,
        profileImage: friend.profileImage,
        coverImage: friend.coverImage,
      };

      switch (friend.privacy) {
        case "only me":
          break;
        case "friends only":
          filteredFriend = {
            ...filteredFriend,
            location: friend.location,
            birthday: friend.birthday,
            work: friend.work,
            hobby: friend.hobby,
          };
          break;
        case "public":
          filteredFriend = {
            ...filteredFriend,
            location: friend.location,
            birthday: friend.birthday,
            work: friend.work,
            hobby: friend.hobby,
          };
          break;
        default:
          break;
      }
      friends.push(filteredFriend);
    }

    switch (user.privacy) {
      case "only me":
        break;
      case "friends only":
        filteredUser = {
          ...filteredUser,
          location: user.location,
          birthday: user.birthday,
          work: user.work,
          hobby: user.hobby,
        };
        break;
      case "public":
        filteredUser = {
          ...filteredUser,
          location: user.location,
          birthday: user.birthday,
          work: user.work,
          hobby: user.hobby,
        };
        break;
      default:
        break;
    }

    res.status(200).send({ user: filteredUser, friends: friends });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetMedias = asyncHandler(async (req, res) => {
  const userId = req.query.id;

  try {
  const posts = await Post.find({ user: userId });

  let media = [];
  posts.forEach((post) => {
    post.media.forEach((m) => {
      media.push(m);
    });
  });

    res.status(200).json({ success: true, data: media });
  } catch (error) {
    res.status(500).json(error);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  console.log(req.user);

  try {
    let user = await User.findById(userId).select(
      "-password -__v -createdAt -updatedAt"
    );
    res.status(201).json(user);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Map the updated fields
    Object.keys(req.body).forEach((key) => {
      user[key] = req.body[key];
    });

    // Save the updated user
    user = await user.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
const updateCoverImage = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  console.log(req.images);

  try {
    let user = await User.findById(userId).select(
      "-password -__v -createdAt -updatedAt"
    );
    res.status(201).json(user);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.coverImage = req.images;

    // Save the updated user
    user = await user.save();

    res.status(200).send({ user });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// Delete a user
const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOneAndDelete({ email });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send({ message: "User deleted successfully" });
});

// @desc    get user info
// @route   GET /api/auth/me
// @access  Private
const GetMe = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  // console.log(userId)

  try {
    let user = await User.findById(userId).select(
      "-password -__v -createdAt -updatedAt"
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const isAuth = asyncHandler(async (req, res) => {
  const { user } = req.session;

  if (user) {
    res.status(200).json({
      auth: true,
      message: "signed in!!!",
      user,
    });
  } else {
    res.status(401).json({
      auth: false,
      message: "not signed in!!!",
    });
  }
});

const SignOut = asyncHandler(async (req, res) => {
  res.clearCookie("refreshToken");
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Failed to logout",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully logged out",
      });
    }
  });
});

module.exports = {
  SignUp,
  SignIn,
  GetMe,
  RefreshToken,
  SignOut,
  GetUser,
  GetMedias,
  updateUser,
  updateCoverImage,
  deleteUser,
};
