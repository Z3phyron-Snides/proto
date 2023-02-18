import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 5%;
`;
export const Card = styled.div`
  width: 50%;
  background: ${(p) => p.theme.cards};
  height: auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);

  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.border};

  p {
    margin-top: 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 25px;
    outline: none;
    border: none;
    border-radius: 8px;
    background: ${(p) => p.theme.button.background};
    color: ${(p) => p.theme.button.text};
    transition: 0.5s ease;
    font-size: 15px;
    /* margin: auto; */

    &:hover {
      background: ${(p) => p.theme.button.hover.background};
      color: ${(p) => p.theme.button.hover.text};
    }
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;
export const FormCtrl = styled.div`
  display: flex;
  gap: 10px;

  .input {
    width: 100%;
    text-align: left;

    small {
      font-size: 8px;
      color: red;
      margin-left: auto;
    }
  }

  @media screen and (max-width: 900px) {
    
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const InputField = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
 
  position: relative;
  width: 100%;

  .toggle {
    position: absolute;
    right: 10px;
    top: 15px;

    @media screen and (max-width: 900px) {
    
    }
    @media screen and (max-width: 500px) {
     top: 15px;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  background: #ffffff;
`;
