const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jdenticon = require("jdenticon");
const axios = require("axios");

const FriendRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  profileImage: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  work: {
    type: String,
  },
  hobby: {
    type: String,
  },
  friendRequests: [FriendRequestSchema],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      privacy: {
        type: String,
        enum: ["only me", "friends only", "public"],
        default: "public",
      },
    },
  ],
  privacy: {
    type: String,
    required: true,
    enum: ["only me", "friends only", "public"],
    default: "public",
  },
  postPrivacy: {
    type: String,
    required: true,
    enum: ["only me", "friends only", "public"],
    default: "public",
  },
});

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
};

UserSchema.methods.generateUsername = async function () {
  const { firstName, lastName, email } = this;
  let username = "";
  const options = [
    firstName + lastName,
    firstName,
    lastName,
    email.split("@")[0],
  ];
  username = options[Math.floor(Math.random() * options.length)];

  if (!username) return "";

  let uniqueUsername = username;
  let i = 1;
  while (true) {
    const existingUser = await this.model("User").findOne({
      userName: uniqueUsername,
    });
    if (!existingUser) break;
    uniqueUsername = username + i++;
  }

  this.userName = uniqueUsername;
  return uniqueUsername;
};

async function generateAvatar(name, size) {
  let avatarUrl;

  const response = await axios.get(
    `https://robohash.org/${name}.png?size=${size}x${size}`
  );
  avatarUrl = response.request.res.responseUrl;

  return avatarUrl;
}

async function generateCoverImage(width, height) {
  const response = await axios.get(`https://picsum.photos/${width}/${height}`);
  return response.request.res.responseUrl;
}

UserSchema.methods.generateProfileAndCover = async function (userName) {
  const shouldUseRobo = Math.random() >= 0.5;
  const profileImageUrl = await generateAvatar(userName, 200);
  const coverImageUrl = await generateCoverImage(800, 300);

  this.profileImage = profileImageUrl;
  this.coverImage = coverImageUrl;
  return this;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

// const generateProfileAndCover = (username, type) => {
//   if (type === "profile_pic") {
//     return createAvatar(username, { size: 200 });
//   } else if (type === "cover_photo") {
//     return loremIpsum({
//       count: 1,
//       format: "html",
//       units: "paragraphs",
//     });
//   }
// };
