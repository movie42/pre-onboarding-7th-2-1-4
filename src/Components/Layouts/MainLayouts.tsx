import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MainHeader from "../Headers/MainHeader";
import Meta from "../Meta/Meta";

const MainLayouts = () => {
  return (
    <Container>
      <Meta />
      <MainHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default MainLayouts;

const Container = styled.div``;
const Main = styled.main``;
