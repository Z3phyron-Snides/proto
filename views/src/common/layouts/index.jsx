import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import TopNavbar from "../navbar";
import LeftNav from "../leftNav";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TopNavbar toggleOpen={toggleOpen} />
      <Wrapper>
        <LeftNav isOpen={isOpen} toggleOpen={toggleOpen} />
        {isOpen && <Overlay onClick={toggleOpen} />}
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
  padding-left: 22%;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 15px;
  z-index: 1;


  @media (max-width: 1024px) {
    padding-left: 32%;
    grid-template-columns: 100%;
  }
  @media (max-width: 900px) {
    padding-left: 0;
    grid-template-columns: 100%;
  }

  @media (max-width: 768px) {
  }
`;

const Pages = styled.div`
  z-index: 1;
`;

const fadeIn = keyframes`
  0%: {
    opacity: 0;
  }
  100%: {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0%: {
    opacity: 1;
  }
  100%: {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    animation: ${(p) => (p.isOpen ? fadeIn : fadeOut)} 0.5s ease;
  }
`;

export default Index;
