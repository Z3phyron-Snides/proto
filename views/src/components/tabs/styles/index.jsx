import styled from "styled-components";


export const Container = styled.div`

`;
export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${props => (props.selected ? '#ccc' : 'white')};
`;

export const TabContent = styled.div`
  border: 1px solid #ccc;
  border-top: none;
  padding: 20px;
`;
