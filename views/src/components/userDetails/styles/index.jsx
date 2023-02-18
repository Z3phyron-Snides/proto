import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5vh 20px 20px;
  background: ${(p) => p.theme.cards};
  border-radius: 20px;
`;
