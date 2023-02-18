import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Likes = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  /* width: 100%; */

  .likes {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .icon {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &.like {
      font-size: 14px;
      z-index: 2;
      background: #286fe0;
    }
    &.react {
      font-size: 14px;
      z-index: 1;
      margin-left: -10px;
      background: #e02868;
    }
  }

  small {
    font-size: 12px;
    color: ${p => p.theme.content};
  }
`;
export const Comments = styled.div`
  font-size: 13px;
  color: ${p => p.theme.text};

  small {
     color: ${p => p.theme.content};
  }
 
`;
export const Share = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 20px;
  outline: none;
  border: none;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background: ${p => p.theme.border};
  color: ${p => p.theme.text};
`;
