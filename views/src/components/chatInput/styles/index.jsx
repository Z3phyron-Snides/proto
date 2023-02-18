import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: relative;
  background: ${(p) => p.theme.cards};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* position: relative; */
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  padding: 10px 7%;
  border: none;
  outline: none;
  /* background: ; */
`;

export const Button = styled.button`
  border: none;
  outline: none;

  &.attachment {
    /* position: absolute;
    left: 20px; */
    width: 35px;
    height: 35px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    transition: all 0.3s ease;
    background: ${(p) => p.theme.shadow};
    color: ${(p) => p.theme.colored};

    &:hover {
      color: ${(p) => p.theme.text};
    }
  }

  &.send {
    background: none;
    font-size: 30px;
    color: ${(p) => p.theme.colored};
    /* position: absolute;
    right: 25px; */
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  position: absolute;
  top: -100px;
  left: 30px;
  background-color: ${(p) => p.theme.cards};
  z-index: 8;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 1px ${(p) => p.theme.shadow};

  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    outline: none;
    border: none;
    background: rgba(168, 67, 241, 0.876);
    color: #fff;
    border-radius: 4px;
    font-size: 20px;
    overflow: hidden;

    &.image {
      background: #3d6ce4;
    }
    &.video {
      background: #e43d99;
    }

    input {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 60vh;
  background-color: ${(p) => p.theme.shadow};
  backdrop-filter: blur(8px);
  /* border-radius: 10px; */
  padding: 20px;
  position: absolute;
  top: -60vh;
  left: 0;
  z-index: 7;

  .media {
    max-width: 50%;
    margin: auto;
    height: 80%;
    overflow: hidden;
    border-radius: 10px;
  }

  .btnGrp {
    display: flex;
    gap: 20px;
  }

  button {
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 7px 13px;
    color: #fff;

    &.close {
      background: #ec298a;
    }
    &.send {
      background: #4860e4;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Video = styled.video`
  width: 100%;
  object-fit: contain;
  height: 100%;
`;
