import styled from 'styled-components'

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;
export const Header = styled.div`
font-size: 20px;
font-weight: 500;
color: ${p => p.theme.text};
`