import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  width: 100%;
  
  align-items: center;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 5vh;
  overflow: hidden;
  max-height: 10vh;
  border: none;
  outline: none;
  background: ${(p) => p.theme.shadow};
  color: ${(p) => p.theme.text};
  border-radius: 8px;

  &::placeholder {
    color: ${(p) => p.theme.shadow};
  }
`;
export const Cta = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${(p) => p.theme.colored};
  background: none;
`;
