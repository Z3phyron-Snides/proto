import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;

  .userName {
    font-size: 14px;
    color: ${(p) => p.theme.text};
  }
`;
export const InputField = styled.form`
  display: flex;
  textarea {
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
  }
`;
export const Comment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(p) => p.theme.text};
  position: relative;

  .comment {
    display: flex;
    flex-direction: column;
    width: 100%;
    line-height: 100%;

    span {
      font-size: 12px;
    }

    small {
      font-size: 8px;
      color: ${(p) => p.theme.content};
      /* margin-left: auto; */
    }
  }

  .comment__actions {
    padding: 5px;
    display: flex;
    gap: 10px;

    border-radius: 4px;

    margin-left: auto;
  }
`;
