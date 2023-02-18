import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  width: 250px;
  position: relative;

  border-radius: 9px;
  @media screen and (max-width: 900px) {
    width: 100px;
  }

  .icon {
    position: absolute;
    top: 23%;
    left: 3%;
    font-size: 20px;
    color: ${(p) => p.theme.content};
  }
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: ${(p) => p.theme.border};
  padding: 10px 10px 10px 35px;
  border-radius: 8px;
  color: ${(p) => p.theme.text};
  transition: all 0.3s ease;

  &:focus {
    transform: scale(1.01);
  }
`;
