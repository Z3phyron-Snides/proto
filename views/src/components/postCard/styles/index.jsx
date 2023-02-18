import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 20px 20px 10px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  color: ${(p) => p.theme.text};

  .timeStamp {
    font-size: 12px;
    font-weight: 200;
    color: ${(p) => p.theme.content};
  }
`;

export const UserInfo = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  color: ${(p) => p.theme.text};
`;

export const Option = styled.div`
  color: ${(p) => p.theme.content};
`;

export const Body = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(p) => p.theme.text};
`;

export const Text = styled.div`
  color: ${(p) => p.theme.text};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 16px;

  .media {
    border-radius: 10px;
    overflow: hidden;
  }

  .media:nth-last-child(-n + 1) {
    position: relative;
    z-index: 1;
    &::before {
      position: absolute;
      top: 0;
      content: ${(props) => (props.counter ? `"+${props.counter}"` : "none")};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: ${(p) => p.theme.shadow};
      font-size: 18px;
      color: ${(p) => p.theme.text};
      z-index: 2;
      border-radius: 10px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:last-of-type {
    position: relative;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ImageCounter = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
`;

export const Footer = styled.footer`
  padding: 12px 0 0;
  border-top: 1px solid ${(p) => p.theme.border};
`;
