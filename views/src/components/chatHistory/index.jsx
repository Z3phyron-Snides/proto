import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import {
  Container,
  ImageMessage,
  MessageContainer,
  MsgBox,
  TextMessage,
  VideoMessage,
} from "./styles";

const isMessageRecipient = (message, user_id) => {
  if (!message?.sender_id?._id) {
    // if there is no sender_id, assume the message is not a recipient
    return false;
  }

  if (message?.sender_id?._id?.toString() === user_id?.toString()) {
    // if the sender_id is the same as the user_id, assume the message is not a recipient
    return false;
  }

  return true;
};

const ChatHistory = ({ messages }) => {
  const { user } = useSelector((state) => state.user);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatDate = (date) => {
    return moment(date).format("h:mm A");
  };

  return (
    <Container>
      {messages.length > 0 &&
        messages.map((message, index) => (
          <MsgBox key={index}>
            <MessageContainer
              isRecipient={isMessageRecipient(message, user?._id)}
            >
              {message?.type === "text" && (
                <TextMessage>{message?.content}</TextMessage>
              )}
              {message?.type === "image" && (
                <ImageMessage src={message?.content} />
              )}
              {message?.type === "video" && (
                <VideoMessage src={message?.content} controls />
              )}
            </MessageContainer>
            <Timestamp isRecipient={isMessageRecipient(message, user?._id)}>
              {formatDate(message?.createdAt)}
            </Timestamp>
          </MsgBox>
        ))}
      <div ref={messagesEndRef} />
    </Container>
  );
};

const Timestamp = styled.div`
  color: #717171;
  font-size: 10px;
  /* width: 100%; */
  position: absolute;
  bottom: 6px;
  ${(props) => (props.isRecipient ? "left" : "right")}: 0;
`;

export default ChatHistory;
