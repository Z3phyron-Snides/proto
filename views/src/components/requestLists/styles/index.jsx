import styled from "styled-components";


export const Container = styled.div`
 
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .title {
    font-size: 15px;
    font-weight: 400;
    color: ${(p) => p.theme.text};
  }

  span {
    width: 20px;
    height: 20px;
    font-size: 14px;
    border-radius: 50px;
    background: rgba(20, 104, 223, 0.813);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
`;
