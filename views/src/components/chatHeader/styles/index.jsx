import styled from "styled-components";

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

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
`;
export const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: auto;

  .name {
    font-size: 16px;
    color: ${(p) => p.theme.text};
  }

  .status {
    font-size: 10px;
    color: ${(p) => p.theme.content};
  }
`;
export const Option = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${(p) => p.theme.content};
  font-size: 20px;
`;
