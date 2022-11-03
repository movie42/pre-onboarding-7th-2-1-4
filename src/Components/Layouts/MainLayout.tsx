import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import MainHeader from "../Headers/MainHeader";
import Meta from "../Meta/Meta";

const MainLayout = () => {
  const { carId } = useParams();
  const [isDetail, setIsDetail] = useState(true);
  useEffect(() => {
    if (carId) {
      setIsDetail(false);
      return;
    }
  }, [carId]);
  return (
    <Container
      onAnimationEnd={() => {
        if (carId) setIsDetail(false);
      }}
      isDetail={isDetail}
    >
      <Meta />
      <MainHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default MainLayout;

const unmountKeyframes = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

const Container = styled.div<{ isDetail: boolean }>`
  ${({ isDetail }) => {
    if (isDetail) {
      return css`
        animation: ${unmountKeyframes} 0.2s ease-in-out;
      `;
    }
  }}
`;

const Main = styled.main``;
