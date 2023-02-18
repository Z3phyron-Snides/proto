import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
  grid-gap: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;
export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Profile = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 20px 20px 0;
  border-radius: 20px;
`;
export const Tabs = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

   @media screen and (max-width: 900px) {
   gap: 10px;
  }
`;
export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? "#a657e3" : "rgba(163, 163, 163, 0.602)"};
  border-bottom: ${(props) => (props.selected ? "2px solid #a657e3" : "")};
  transition: all 0.3s ease;

   @media screen and (max-width: 900px) {
    padding: 6px 13px;
  }

  &:hover {
    color: ${(props) =>
      props.selected ? "#a657e3" : "rgba(163, 163, 163, 0.602)"};
    border-bottom: ${(props) => (props.selected ? "2px solid #a657e3" : "")};
  }
`;

export const TabContent = styled.div``;
