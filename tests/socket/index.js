// Here are the steps to create a MERN (MongoDB, Express, React, Node.js) app with socket.io to show live notifications to a user:

// Create a new project directory and install the required packages:

// $ mkdir mern-socketio-app
// $ cd mern-socketio-app
// $ npm init -y
// $ npm install express mongodb socket.io
// Set up the server with Express and socket.io:


// // server.js
// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// io.on('connection', socket => {
//   console.log('User connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// server.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// Connect to the MongoDB database:

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mern-socketio-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });
// Define a notification schema and model:

// const notificationSchema = new mongoose.Schema({
//   message: String
// });

// const Notification = mongoose.model('Notification', notificationSchema);
// Create a route for creating notifications:

// app.post('/notifications', async (req, res) => {
//   const notification = new Notification({ message: req.body.message });
//   await notification.save();

//   io.emit('notification', req.body.message);

//   res.send('Notification sent');
// });
// Set up the React frontend:

// $ npx create-react-app client
// $ cd client
// $ npm install socket.io-client
// Connect to the socket.io server in the React component:

// // src/App.js
// import React, { useState, useEffect } from 'react';
// import socketIOClient from 'socket.io-client';

// const endpoint = 'http://localhost:3000';
// const socket = socketIOClient(endpoint);

// function App() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     socket.on('notification', message => {
//       setNotifications([...notifications, message]);
//     });
//   }, [notifications]);

//   return (
//     <ul>
//       {notifications.map((notification, index) => (
//         <li key={index}>{notification}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;



// const [friendRequests, setFriendRequests] = useState([]);
// const [chats, setChats] = useState([]);
// const [postNotifications, setPostNotifications] = useState([]);
// const [likeNotifications, setLikeNotifications] = useState([]);
// const [commentNotifications, setCommentNotifications] = useState([]);

// useEffect(() => {
//   socket.on("friendRequest", (friendRequest) => {
//     setFriendRequests([...friendRequests, friendRequest]);
//   });

//   socket.on("chat", (chat) => {
//     setChats([...chats, chat]);
//   });

//   socket.on("postNotification", (postNotification) => {
//     setPostNotifications([...postNotifications, postNotification]);
//   });

//   socket.on("likeNotification", (likeNotification) => {
//     setLikeNotifications([...likeNotifications, likeNotification]);
//   });

//   socket.on("commentNotification", (commentNotification) => {
//     setCommentNotifications([...commentNotifications, commentNotification]);
//   });
// }, [
//   friendRequests,
//   chats,
//   postNotifications,
//   likeNotifications,
//   commentNotifications,
// ]);



// import { createSlice } from "@reduxjs/toolkit";

// const notificationsSlice = createSlice({
//   name: "notifications",
//   initialState: {
//     friendRequests: [],
//     chats: [],
//     postNotifications: [],
//     likeNotifications: [],
//     commentNotifications: [],
//   },
//   reducers: {
//     addFriendRequest: (state, action) => {
//       state.friendRequests.push(action.payload);
//     },
//     addChat: (state, action) => {
//       state.chats.push(action.payload);
//     },
//     addPostNotification: (state, action) => {
//       state.postNotifications.push(action.payload);
//     },
//     addLikeNotification: (state, action) => {
//       state.likeNotifications.push(action.payload);
//     },
//     addCommentNotification: (state, action) => {
//       state.commentNotifications.push(action.payload);
//     },
//   },
// });

// export const {
//   addFriendRequest,
//   addChat,
//   addPostNotification,
//   addLikeNotification,
//   addCommentNotification,
// } = notificationsSlice.actions;

// export default notificationsSlice.reducer;



// import React, { createContext, useContext } from "react";
// import { useSelector } from "react-redux";

// const NotificationsContext = createContext();

// export const useNotifications = () => useContext(NotificationsContext);

// export const NotificationsProvider = ({ children }) => {
//   const notifications = useSelector((state) => state.notifications);

//   return (
//     <NotificationsContext.Provider value={notifications}>
//       {children}
//     </NotificationsContext.Provider>
//   );
// };




// import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import { NotificationsProvider } from "./notificationsContext";

// function App() {
//   return (
//     <Provider store={store}>
//       <NotificationsProvider>
//         {/* Your app components go here */}
//       </NotificationsProvider>
//     </Provider>
//   );
// }

// export default App;


// import React from "react";
// import { useNotifications } from "./notificationsContext";

// function Notifications() {
//   const {
//     friendRequests,
//     chats,
//     postNotifications,
//     likeNotifications,
//     commentNotifications,
//   } = useNotifications();

//   return (
//     <div>
//       <h2>Friend Requests</h2>
//       <ul>
//         {friendRequests.map((friendRequest, index) => (
//           <li key={index}>{friendRequest}</li>
//         ))}
//       </ul>
//       <h2>Chats</h2>
//       <ul>
//         {chats.map((chat, index) => (
//           <li key={index}>{chat}</li>
//         ))}
//       </ul>
//       <h2>Post Notifications</h2>
//       <ul>
//         {postNotifications.map((postNotification, index) => (
//           <li key={index}>{postNotification}</li>
//         ))}
//       </ul>
//       <h2>Like Notifications</h2>
//       <ul>
//         {likeNotifications.map((likeNotification, index) => (
//           <li key={index}>{likeNotification}</li>
//         ))}
//       </ul>
//       <h2>Comment Notifications</h2>
//       <ul>
//         {commentNotifications.map((commentNotification, index) => (
//           <li key={index}>{commentNotification}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Notifications;


//  import React, { useState } from "react";
//  import InputEmoji from "react-input-emoji";

//  export default function Example() {
//    const [text, setText] = useState("");

//    function handleOnEnter(text) {
//      console.log("enter", text);
//    }

//    return (
//      <InputEmoji
//        value={text}
//        onChange={setText}
//        cleanOnEnter
//        onEnter={handleOnEnter}
//        placeholder="Type a message"
//      />
//    );
//  }