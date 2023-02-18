import styled from "styled-components";

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 15px;
  border-radius: 10px;
  width: 100%;

  display: flex;
  gap: 10px;
  flex-direction: column;
  z-index: 1;
`;
export const User = styled.div`
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: ${(p) => p.theme.content};

  strong {
    color: ${(p) => p.theme.text};
  }
`;
export const BtnGrp = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

 
 
`;
