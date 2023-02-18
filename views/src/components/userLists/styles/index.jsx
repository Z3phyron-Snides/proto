import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${(p) => p.theme.cards};
  padding: 40px 20px 10px;
  border-radius: 8px;
  height: 80vh;
  overflow-y: scroll;
  position: relative;
  z-index: 1;

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

  @media screen and (max-width: 900px) {
    display: ${(p) => (p.chatroom ? "none" : "flex")};
  }
`;
export const Header = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  z-index: 1;

  .head {
    display: flex;
    gap: 20px;
    align-items: center;
    color: ${(p) => p.theme.text};

    button {
      cursor: pointer;
      border: none;
      outline: none;
      background: none;
      color: ${(p) => p.theme.colored};
      font-size: 25px;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .search__chat {
    display: flex;
    align-items: center;
    gap: 20px;
    z-index: 1;
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
export const ChatList = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Empty = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 30vh;
`;
