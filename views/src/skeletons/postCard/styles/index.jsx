import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 20px 20px 10px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 5px #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;

  .timeStamp {
    font-size: 12px;
    font-weight: 200;
    color: #cecece;
  }
`;

export const UserInfo = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  color: #333;
`;

export const Option = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.div``;

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
      background: rgba(0, 0, 0, 0.363);
      font-size: 18px;
      color: white;
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
  transition: all .3s ease;

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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
