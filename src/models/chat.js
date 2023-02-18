const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Conversation schema
const ConversationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

// Message schema
const MessageSchema = new Schema({
  conversation_id: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true,
  },
  sender_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
  type: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Conversation = mongoose.model("Conversation", ConversationSchema);

const Message = mongoose.model("Message", MessageSchema);

module.exports = { Conversation, Message };
