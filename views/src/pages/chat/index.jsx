import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import ChatHeader from "../../components/chatHeader";
import ChatHistory from "../../components/chatHistory";
import ChatInput from "../../components/chatInput";
import ChatProfile from "../../components/chatProfile";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  createConversation,
  fetchMessages,
  reset,
  sendMessage,
} from "../../features/chat/ChatSlice";
import {io } from 'socket.io-client'

const ChatRoom = () => {
  const { id } = useParams();
  const [showProfile, setShowProfile] = useState(false);
  const [socket, setSocket] = useState(null);

  const {
    messages,
    currentConversation,
  } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages(id));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, id]);

  const handleSendMessage = (msg) => {
    // console.log(data)
    if (!currentConversation) {
      dispatch(
        createConversation({
          recepient: id,
          msg,
        })
      );
    } else {
      dispatch(
        sendMessage({
          conversationId: currentConversation?._id,
          msg,
        })
      );
    }
  };

  useEffect(() => {
   setSocket(io('ws://localhost:8900'))
  }, [])

  return (
    <Container showProfile={showProfile}>
      <Wrapper>
        <ChatHeader
          setShowProfile={setShowProfile}
          showProfile={showProfile}
          user={currentConversation}
        />
        <ChatHistory messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </Wrapper>

      <ChatProfile show={showProfile} />
    </Container>
  );
};

export default ChatRoom;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import {
//   createConversation,
//   fetchMessages,
//   sendMessage,
//   reset,
// } from "./chatSlice";

// function ChatRoom() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const {
//     messages,
//     isLoading,
//     isError,
//     isSuccess,
//     currentConversation,
//     message,
//   } = useSelector((state) => state.chat);

//   useEffect(() => {
//     dispatch(fetchMessages(id));
//     return () => {
//       dispatch(reset());
//     };
//   }, [dispatch, id]);

//   const handleSendMessage = (content, media) => {
//     if (!currentConversation) {
//       dispatch(
//         createConversation({
//           name: user.username,
//           members: [user._id, id],
//           content,
//           media,
//         })
//       );
//     } else {
//       dispatch(
//         sendMessage({ conversationId: currentConversation._id, content, media })
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Chat with {id}</h1>
//       {isLoading && <div>Loading...</div>}
//       {isError && <div>{message}</div>}
//       {isSuccess && (
//         <div>
//           <ul>
//             {messages.map((msg) => (
//               <li key={msg._id}>
//                 {msg.content} - {msg.sender.username}
//               </li>
//             ))}
//           </ul>
//           <MessageForm onSendMessage={handleSendMessage} />
//         </div>
//       )}
//     </div>
//   );
// }

// function MessageForm({ onSendMessage }) {
//   const [content, setContent] = useState("");
//   const [media, setMedia] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSendMessage(content, media);
//     setContent("");
//     setMedia(null);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Message:
//         <input
//           type="text"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//       </label>
//       <label>
//         Media:
//         <input type="file" onChange={(e) => setMedia(e.target.files[0])} />
//       </label>
//       <button type="submit">Send</button>
//     </form>
//   );
// }
