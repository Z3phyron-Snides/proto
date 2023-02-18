import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${(p) => (p.showProfile ? "auto 20%" : "100%")};
  border-radius: 20px;
  overflow: hidden;
  background: ${(p) => p.theme.background};
`;
export const Wrapper = styled.div``;
