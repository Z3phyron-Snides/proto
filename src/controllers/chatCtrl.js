const asyncHandler = require("express-async-handler");
const { Conversation, Message } = require("../models/chat");
const User = require("../models/user");

// Conversation creation
const createConversation = asyncHandler(async (req, res) => {
  const user1Id = req.user.id;
  const user2Id = req.query.recepient;
  // const user2Id = req.query.id;

  const user1 = await User.findById(user1Id).select("-password");
  const user2 = await User.findById(user2Id).select("-password");

  console.log(user2);

  if (!user2) {
    return res.status(404).json({ message: "User2 not found" });
  }

  const members = [user1, user2];

  const conversation = new Conversation({
    name: user2.userName,
    members,
  });

  await conversation.save();

  // populate members field with User documents
  await conversation.populate({
    path: "members",
    select: "-password",
    match: { _id: { $ne: user1Id } },
  });

  res.status(201).json(conversation);
});

// Message sending
const sendMessage = asyncHandler(async (req, res) => {
  const conversation_id = req.query.id;
  const sender_id = req.user.id;

  // Check if the sender exists in the User collection
  const sender = await User.findById(sender_id);
  if (!sender) {
    return res.status(404).json({ message: "Sender not found" });
  }

  // Check if the sender is a member of the conversation
  const conversation = await Conversation.findById(conversation_id);
  if (!conversation) {
    return res.status(404).json({ message: "Conversation not found" });
  }
  if (!conversation.members.includes(sender_id)) {
    return res
      .status(403)
      .json({ message: "Sender is not a member of the conversation" });
  }

  const { type, text } = req.body;
  console.log(req.media);
  // console.log(req.body)

  let message = new Message({
    conversation_id,
    sender_id,
  });
 
  if (type === "text") {
    message.content = text;
    message.type =type;
  } else if (
    (type === "image" && req.media[0].type === "image") ||
    (type === "video" && req.media[0].type === "video")
  ) {
    message.content = req.media[0].url;
    message.type = req.media[0].type;
  }  else {
    return res.status(400).json({ message: "Invalid message type" });
  }

  await message.save();

  res.status(201).json(message);
});

// Get conversations for a user
const getConversations = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const conversations = await Conversation.find({ members: userId })
    .populate({
      path: "members",
      select: "-password",
      match: { _id: { $ne: userId } },
    })
    .sort("-updatedAt");

  res.json(conversations);
});

// Get messages for a conversation
const getMessages = asyncHandler(async (req, res) => {
  const conversationId = req.query.id;

  try {
    const conversation = await Conversation.findById(conversationId)
      .populate({
        path: "members",
        select: "-password",
        match: { _id: { $ne: req.user.id } },
      })
      .lean();

    const messages = await Message.find({ conversation_id: conversationId })
      .populate({
        path: "sender_id",
        select: "-password",
      })
      .populate({
        path: "conversation_id",
        populate: {
          path: "members",
          select: "-password",
          match: { _id: { $ne: req.user.id } },
        },
        options: { lean: true }, // <-- Add this line
      })
      .sort("created_at")
      .lean(); // <-- Add this line

    res.status(201).json({ conversation, messages });
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a conversation
const deleteConversation = asyncHandler(async (req, res) => {
  const conversationId = req.query.id;

  const conversation = await Conversation.findById(conversationId);
  if (!conversation) {
    return res.status(404).json({ message: "Conversation not found" });
  }

  await conversation.remove();
  await Message.deleteMany({ conversation_id: conversationId });

  res.json({ message: "Conversation deleted successfully" });
});

module.exports = {
  createConversation,
  sendMessage,
  getConversations,
  getMessages,
  deleteConversation,
};
