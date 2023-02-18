import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Index = () => {
  return (
    <Container>
      <Pages>
        <Outlet />
      </Pages>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Pages = styled.div`
  z-index: 1;
`;

export default Index;
