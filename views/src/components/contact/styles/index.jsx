import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 1;

  .userName {
    font-size: 13px;
    color: ${(p) => p.theme.text};
  }

  .option {
    margin-left: auto;
    color: ${(p) => p.theme.content};
  }
`;
