import styled from "styled-components";

export const Container = styled.div`
  background: ${(p) => p.theme.background};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 60vh;
  overflow-y: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${(p) => p.theme.shadow};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colored};
    outline: none;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isRecipient ? "flex-start" : "flex-end"};
  margin-bottom: 20px;
  position: relative;
  z-index: 5;
  background: ${(props) => (props.isRecipient ? "#cb57e5" : "#fff")};
  color: ${(props) => (props.isRecipient ? "#ffffff" : "#070707")};
  font-size: 14px;
  padding: 10px;
  max-width: 220px;
  max-height: 100%;
  border-radius: 10px;

  &:after {
    content: "";
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    /* border-top: 15px solid #ccc; */
    border-bottom: 15px solid
      ${(props) => (props.isRecipient ? "#cb57e5" : "#fff")};
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    z-index: -1;
    ${(props) => (props.isRecipient ? "left" : "right")}: -15px;
  }
  ${(props) => (props.isRecipient ? "margin-right" : "margin-left")}: auto;
`;

export const MsgBox = styled.div`
 position: relative;
`;
export const TextMessage = styled.div`
  padding: 2px 5px;
  width: 200px;
  background-color: transparent;
  border-radius: 10px;
  z-index: 5;
`;

export const ImageMessage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  z-index: 5;
`;

export const VideoMessage = styled.video`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  z-index: 5;
`;

export const EmojiMessage = styled.div`
  font-size: 20px;
  margin: 10px;
`;
