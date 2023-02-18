import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0%: {
    transform: translateX(-50%);
    opacity: 0;
  }
  100%: {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0%: {
    transform: translateX(0);
    opacity: 1;
  }
  100%: {
    transform: translateX(-50%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  position: fixed;
  top: 15vh;
  left: 5%;
  z-index: 5;

  @media (max-width: 1024px) {
  }
  @media (max-width: 900px) {
    display: ${(p) => (p.isOpen ? "flex" : "none")};
    padding-top: 15vh;
    position: fixed;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 3;
    background: ${(p) => p.theme.cards};
    animation: ${(p) => (p.isOpen ? slideIn : slideOut)} 0.5s ease;
  }

  @media (max-width: 768px) {
  }
`;
