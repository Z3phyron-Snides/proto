import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
`;
export const FormCtrl = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-right: auto;

   @media screen and (max-width: 900px) {
  flex-direction: column;
  gap: 10px;
  }
`;
export const InputField = styled.div`
  border: 1px solid ${p => p.theme.shadow};
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  background: ${p => p.theme.shadow};
  position: relative;

  .toggle {
    position: absolute;
    right: 10px;
    top: 7px;
    color: ${p => p.theme.content};
  }
`;

export const Label = styled.label`
  font-weight: 100;
  color: ${p => p.theme.content};

   @media screen and (max-width: 900px) {
    margin-right: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 7px 12px;
  outline: none;
  border: none;
  background: transparent;
`;

export const Button = styled.button`
  padding: 7px 14px;
  background: #6f29f1;
  outline: none;
  border: none;
  border-radius: 8px;
  color: #fff;
  margin-right: auto;
`;
