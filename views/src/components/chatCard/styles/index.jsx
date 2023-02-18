import styled from "styled-components";


export const Container = styled.div`
 display: flex;
 gap: 10px;
 align-items: center;
z-index: 1;
`;
export const Info = styled.div`
  .name {
    font-size: 13px;
    color: ${(p) => p.theme.text};
  }

  p {
    font-size: 12px;
    color: ${(p) => p.theme.content};
  }
`;
export const TimeStamp = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .status {
    margin-left: auto;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #09f175;
    margin-bottom: 5px;
  }

  .lastSeen {
    text-align: center;
    font-size: 10px;
    color: ${(p) => p.theme.shadow};
  }
`;
