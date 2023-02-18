import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
`;
export const Card = styled.div`
  width: 70%;
  background: ${(p) => p.theme.cards};
  height: auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.border};

  button {
    padding: 10px 25px;
    outline: none;
    border: none;
    border-radius: 8px;
    background: ${(p) => p.theme.button.background};
    color: ${(p) => p.theme.button.text};
    transition: 0.5s ease;
    font-size: 15px;
    /* margin: auto; */

    &:hover {
      background: ${(p) => p.theme.button.hover.background};
      color: ${(p) => p.theme.button.hover.text};
    }
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const User = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  position: relative;
  border: 1px solid ${(p) => p.theme.border};

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 30px;
    color: ${(p) => p.theme.shadow};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100px;
    height: 100px;
    z-index: 4;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
    object-fit: cover;
    z-index: 1;
    transform: scale(1.1);
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;
export const FormCtrl = styled.div`
  display: flex;
  gap: 10px;
`;
