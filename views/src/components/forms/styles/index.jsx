import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

   @media screen and (max-width: 900px) {
    align-items: end;
  }

  /* background: rgba(228, 227, 227, 0.123); */
`;
export const Btn = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${(p) => p.theme.button.text};

  &.edit {
    margin-top: -5px;
  }

  &.submit {
    padding: 7px 13px;
    background: #7432ca;
    color: #fff;
    border-radius: 8px;
  }
`;
