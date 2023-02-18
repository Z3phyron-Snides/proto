import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  overflow-y: scroll;
  padding: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isRecipient ? "flex-start" : "flex-end"};
  margin-bottom: 20px;
`;

const TextMessage = styled.div`
  padding: 10px 20px;
  background-color: #ccc;
  border-radius: 10px;
`;

const ImageMessage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const VideoMessage = styled.video`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const EmojiMessage = styled.div`
  font-size: 50px;
  margin: 10px;
`;

const ChatHistory = ({ messages }) => {
  return (
    <Container>
      {messages.map((message, index) => (
        <MessageContainer key={index} isRecipient={message.isRecipient}>
          {message.type === "text" && <TextMessage>{message.text}</TextMessage>}
          {message.type === "image" && <ImageMessage src={message.url} />}
          {message.type === "video" && (
            <VideoMessage src={message.url} controls />
          )}
          {message.type === "emoji" && (
            <EmojiMessage>{message.emoji}</EmojiMessage>
          )}
        </MessageContainer>
      ))}
    </Container>
  );
};

export default ChatHistory;
