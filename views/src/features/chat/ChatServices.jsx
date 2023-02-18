import axios from "axios";
import { tokenConfig } from "../tokenConfig";

const API_URL = "http://localhost:5000/api/chat/";

axios.defaults.withCredentials = true;

const createConversation = async (recepient, token) => {
  const params = { recepient };
  const { data } = await axios.get(
    `${API_URL}conversation`,
    tokenConfig(token, params)
  );

  return data;
};

const getConversations = async (token) => {
  const { data } = await axios.get(
    `${API_URL}recents`,
    tokenConfig(token, null)
  );

  return data;
};

const getConversationById = async (id, token) => {
  const { data } = await axios.get(
    `${API_URL}conversation/${id}`,
    tokenConfig(token)
  );

  return data;
};

const createMessage = async (convo, token) => {
  const { conversationId, msg } = convo;
  console.log(msg);

  const formData = new FormData();
  formData.append("type", msg.type);

  if (msg.type === "text") {
    formData.append("text", msg.text);
  } else if (msg.type === "image") {
    formData.append("image", msg.media);
  } else if (msg.type === "video") {
    formData.append("video", msg.media);
  }

  const { data } = await axios.post(`${API_URL}message`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    params: { id: conversationId },
  });

  return data;
};


const getMessagesByConversationId = async (conversationId, token) => {
  let params = { id: conversationId };
  const { data } = await axios.get(
    `${API_URL}message`,
    tokenConfig(token, params)
  );

  return data;
};

const chatService = {
  createConversation,
  getConversations,
  getConversationById,
  createMessage,
  getMessagesByConversationId,
};

export default chatService;

// import axios from "axios";

// const API_URL = "http://localhost:3000/api/chat";

// const ChatService = {
//   getConversations: async (token) => {
//     const response = await axios.get(`${API_URL}/conversations`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   },

//   createConversation: async (name, members, token) => {
//     const response = await axios.post(
//       `${API_URL}/conversations`,
//       {
//         name,
//         members,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   },

//   getMessagesByConversationId: async (conversationId, token) => {
//     const response = await axios.get(
//       `${API_URL}/conversations/${conversationId}/messages`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   },

//   createMessage: async (conversationId, content, media, token) => {
//     const formData = new FormData();
//     formData.append("content", content);
//     if (media) {
//       formData.append("media", media);
//     }
//     const response = await axios.post(
//       `${API_URL}/conversations/${conversationId}/messages`,
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return response.data;
//   },
// };

// export default ChatService;
