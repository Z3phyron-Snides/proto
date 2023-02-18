import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledShape = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "0")};
  animation: ${(props) => {
    switch (props.animation) {
      case "bounce":
        return `${bounce} 1s ease-in-out infinite`;
      case "fade-in":
        return `${fadeIn} 1s ease-in`;
      case "rotate":
        return `${rotate} 2s linear infinite`;
      default:
        return "none";
    }
  }};
  background-color: ${(props) => props.color};
`;

const Shape = ({ animation, shape, size, color }) => (
  <StyledShape animation={animation} shape={shape} size={size} color={color} />
);

export default Shape;
