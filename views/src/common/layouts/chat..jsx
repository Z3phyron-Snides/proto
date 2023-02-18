import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import TopNavbar from "../navbar";
import UserList from "../../components/userLists";


const ChatPage = () => {
  const {id} = useParams()
  
  return (
    <Container>
      <TopNavbar />
      <Wrapper>
        <UserList show={id ? true : false} /> 
        <Pages>
          <Outlet />
        </Pages>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 15vh 5% 0;
`;

const Wrapper = styled.div`
/* background: #fffefe; */
  display: grid;
  grid-template-columns: 28% 72%;
  grid-gap: 15px;

   @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

const Pages = styled.div`
  z-index: 1;
`;

export default ChatPage;
