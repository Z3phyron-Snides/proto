import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% auto;
  grid-gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const Feed = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

`;
export const Side = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

@media screen and (max-width: 900px) {
  display: none;
}
`;


