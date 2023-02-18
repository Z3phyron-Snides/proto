const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// Send a friend request
const GetRequests = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId).populate({
    path: "friendRequests.user",
    select: "id profileImage userName",
  });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const requests = user.friendRequests;

  res.status(200).send(requests);
});

// Send a friend request
const sendRequest = asyncHandler(async (req, res) => {
  const requester = req.user.id;
  const recepient = req.query.id;
  // console.log(req.query)

  const requesterUser = await User.findById(requester);
  if (!requesterUser) {
    return res.status(404).send({ message: "Requester user not found" });
  }

  const recipientUser = await User.findById(recepient);
  if (!recipientUser) {
    return res.status(404).send({ message: "Recipient user not found" });
  }

  recipientUser.friendRequests.push({ user: requester });
  await recipientUser.save();

  res.status(200).send({ message: "Friend request sent successfully" });
});

// Accept a friend request
const acceptRequest = asyncHandler(async (req, res) => {
  const currentUser = req.user.id;
  const requester = req.query.id;

  const user = await User.findById(currentUser);
  if (!user) {
    return res.status(404).send({ message: " User not found" });
  }

  const requesterUser = await User.findById(requester);
  if (!requesterUser) {
    return res.status(404).send({ message: "Requester user not found" });
  }

  // Remove the requester from current user's friend requests and add them to their friends list
  
  user.friendRequests = user.friendRequests.filter(
    (id) => id.user.toString() !== requesterUser._id.toString()
  );
  user.friends.push(requesterUser);
  await user.save();

  // Add current user to the requester's friend list
  requesterUser.friends.push(user);
  await requesterUser.save();

  // Get all current user's friends
  const friends = await User.find(
    { _id: { $in: user.friends } },
    { password: 0 }
  );

  const requests = user.friendRequests;

  res
    .status(200)
    .send({ message: "Friend request accepted", friends, requests });
});

const rejectRequest = asyncHandler(async (req, res) => {
  const currentUser = req.user.id;
  const requester = req.query.id;

  const user = await User.findById(currentUser);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const requesterUser = await User.findById(requester);
  if (!requesterUser) {
    return res.status(404).send({ message: "Requester user not found" });
  }

  // Remove the requester from current user's friend requests
  user.friendRequests = user.friendRequests.filter(
    (id) => id.user.toString() !== requesterUser._id.toString()
  );
  await user.save();

  const requests = user.friendRequests;

  res.status(200).send(requests);
});

const getFriends = asyncHandler(async (req, res) => {
  const currentUser = req.user.id;

  const user = await User.findById(currentUser).populate(
    "friends",
    "-password"
  );
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const friends = user.friends;

  res.status(200).send(friends);
});

module.exports = {
  getFriends,
  GetRequests,
  sendRequest,
  acceptRequest,
  rejectRequest,
};

// const blockUser = asyncHandler(async (req, res) => {
//   const currentUser = req.user.id;
//   const userToBlock = req.query.id;

//   const user = await User.findById(currentUser);
//   if (!user) {
//     return res.status(404).send({ message: "User not found" });
//   }

//   const userToBlockDoc = await User.findById(userToBlock);
//   if (!userToBlockDoc) {
//     return res.status(404).send({ message: "User to block not found" });
//   }

//   // Remove user to block from current user's friends and friend requests
//   user.friends = user.friends.filter(
//     (friend) => friend.id !== userToBlockDoc.id
//   );
//   user.friendRequests = user.friendRequests.filter(
//     (email) => email !== userToBlockDoc.email
//   );
//   // Add user to block to the current user's blocked users list
//   user.blockedUsers.push(userToBlockDoc);
//   await user.save();

//   res.status(200).send({ message: "User blocked" });
// });
