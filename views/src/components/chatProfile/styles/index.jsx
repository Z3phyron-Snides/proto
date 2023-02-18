import styled from "styled-components";


export const Container = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 40px 10px 0;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .userName {
    font-size: 20px;
    font-weight: 400;


  }

  .status {
    font-size: 10px;
    color: #545454;
  }
`;
