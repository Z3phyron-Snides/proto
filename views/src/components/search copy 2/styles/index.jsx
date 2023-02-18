import styled from "styled-components";


export const Container = styled.div`
 /* position: relative; */
`;


export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 20px;
  outline: none;
  color:#ccc;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  float: right;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const ReactionPopup = styled.div`
  position: absolute;
  background-color: white;
  padding: 1em;
  border: 1px solid gray;
  border-radius: 50px;
  top: -40px;
  left: 0;
  
  display: flex;
  gap: 10px;
`;
export const Reaction = styled.div`
 
`;