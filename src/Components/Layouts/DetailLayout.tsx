import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DetailHeader from "../Headers/DetailHeader";
import Meta from "../Meta/Meta";

const DetailLayout = () => {
  return (
    <Container>
      <Meta />
      <DetailHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default DetailLayout;

const Container = styled.div``;
const Main = styled.main``;
