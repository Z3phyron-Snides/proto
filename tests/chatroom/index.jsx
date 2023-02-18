import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 50px auto;
`;

const ChatHistory = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 20px;
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 20px;
`;

const ChatRoom = () => {
  return (
    <Container>
      <ChatHistory>{/* Chat messages go here */}</ChatHistory>
      <Input placeholder="Type your message here" />
    </Container>
  );
};

export default ChatRoom;
