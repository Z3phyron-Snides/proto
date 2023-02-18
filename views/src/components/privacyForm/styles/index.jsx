import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  h5 {
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: ${(p) => p.theme.text};

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 100;
  display: block;
  color: ${(p) => p.theme.content};

  @media screen and (max-width: 900px) {
    font-size: 13px;
  }
`;

export const Select = styled.select`
  padding: 5px 10px;
  outline: none;
  font-size: 12px;
  border-radius: 8px;
  margin-left: auto;
  /* background: ${(p) => p.theme.shadow}; */
  color: ${(p) => p.theme.content};
`;

export const Option = styled.option`
  padding: 7px 12px;
`;

export const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${(p) => p.theme.button.text};

  &.submit {
    padding: 7px 13px;
    background: #7432ca;
    color: #fff;
    border-radius: 8px;
  }
`;
