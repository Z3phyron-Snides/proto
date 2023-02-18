import styled, { keyframes } from "styled-components";

const fade_in = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fade_in} 0.5s ease;

  .name {
    margin-top: 10px;
    color: ${(p) => p.theme.text};
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;
export const FormCtrl = styled.div`

`;
