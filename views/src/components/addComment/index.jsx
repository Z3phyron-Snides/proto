import { Container, Cta, Form, TextArea } from "./styles";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { CommentPost } from "../../features/post/PostSlice";

const Index = ({ postId }) => {
  const { user } = useSelector((state) => state.user);
  const [commentText, setCommentText] = useState("");

  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentData = { id: postId, text: commentText };
    dispatch(CommentPost(commentData));
    setCommentText("");
  };
  return (
    <Container>
      <Avatar size="md" squared src={user?.profileImage} />

      <Form onSubmit={handleSubmit}>
        <TextArea
          cols="20"
          rows="10"
          placeholder="Add a comment..."
          onChange={handleTextChange}
          value={commentText}
        />
        <Cta type="submit">
          <IoIosSend />
        </Cta>
      </Form>
    </Container>
  );
};

export default Index;

// import React from 'react';
// import Reactions from 'react-reactions';

// const LikeReact = ({ post, onReact }) => {
//   const reactions = [
//     {
//       id: 'like',
//       label: 'Like',
//       emoji: '❤️'
//     },
//     {
//       id: 'love',
//       label: 'Love',
//       emoji: '😍'
//     },
//     {
//       id: 'haha',
//       label: 'Haha',
//       emoji: '😂'
//     },
//     {
//       id: 'wow',
//       label: 'Wow',
//       emoji: '😮'
//     },
//   ];

//   const handleReact = (reaction) => {
//     onReact(reaction, post.id);
//   };

//   return (
//     <div>
//       <Reactions
//         reactions={reactions}
//         onReact={handleReact}
//         selectedReaction={post.selectedReaction}
//       />
//       <p>
//         {reactions.map((reaction) => (
//           <span key={reaction.id}>
//             {reaction.emoji} {post.reactions[reaction.id]}
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// };

// export default LikeReact;
