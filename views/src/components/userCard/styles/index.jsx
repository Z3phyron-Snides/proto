import styled from "styled-components";

export const Container = styled.div`
   background: ${p => p.theme.cards};
  padding: 15px;
  border-radius: 10px;
 
  z-index: 1;
  display: flex;
  align-items: center;

 

  .name {
    font-size: 13px;
    color: ${p => p.theme.text};
  }
  .userName {
    font-size: 10px;
    color: ${p => p.theme.content};
  }
  

  @media  (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: transparent;
    box-shadow: none;
  }
`;
