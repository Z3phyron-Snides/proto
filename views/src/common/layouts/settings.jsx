import React from "react";
import {  Outlet } from "react-router-dom";
import styled from "styled-components";

import SideNav from "../../components/settingsnav";


const Container = styled.div`
  /* display: grid; */
  /* padding: 10vh 5% 0; */
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

const SettingsLayout = () => {

  return (
    <Container>
      <Wrapper>
        <SideNav />
        <div>
          <Outlet />
        </div>
      </Wrapper>
    </Container>
  );
};

export default SettingsLayout;
