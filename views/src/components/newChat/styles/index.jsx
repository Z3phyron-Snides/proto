import styled, { keyframes } from "styled-components";

const slideUp = keyframes`

  0% {
  transform: translateX(100%);
  opacity: 0;
  }

  100% {
  transform: translateX(0);
    opacity: 1;
  }
`;
const slideDwn = keyframes`

  0% {
  transform: translateX(0);
  opacity: 1;
  }

  100% {
  transform: translateX(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 900px) {
    display: ${(p) => (p.chatroom ? "none" : "flex")};
  }
`;
export const Header = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  .head {
    display: flex;
    gap: 20px;
    align-items: center;
    color: ${(p) => p.theme.text};
  }
`;
export const PopUp = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${(p) => p.theme.cards};
  padding: 40px 20px 10px;
  border-radius: 8px;
  height: auto;
  width: 100%;
  z-index: 999;
  display: ${(p) => (p.open ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  animation: ${(p) => (p.open ? slideUp : slideDwn)} .5s ease;

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

export const SearchCont = styled.div`
  background: ${(p) => p.theme.shadow};

  border-radius: 8px;
  overflow: hidden;
  padding: 3px;
  position: relative;

  .icon {
    position: absolute;
    top: 8px;
    color: ${(p) => p.theme.colored};
    left: 10px;
  }

  input {
    width: 100%;
    padding: 5px 30px;
    border: none;
    outline: none;
    background: transparent;
  }
`;


export const FriendList = styled.div`
 display: flex;
flex-direction: column;
gap: 20px;
`;
