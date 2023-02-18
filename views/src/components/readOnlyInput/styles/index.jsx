import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
   @media screen and (max-width: 900px) {
    font-size: 12px;
    flex-direction: column;
    text-align: left;
    gap: 5px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${(p) => p.theme.content};

  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-right: auto;
  }
  /* width: 20%; */
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 8px;
  color: ${(p) => p.theme.text};

  @media screen and (max-width: 900px) {
    width: 90%;
    margin-right: auto;
  }
`;
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  max-height: 200px;
  color: ${(p) => p.theme.text};
  /* margin-right: auto; */
  /* width: 100%; */
`;
