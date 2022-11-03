import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <h2>불러오는 중</h2>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: grid;
  place-content: center;
  height: calc(100vh - 9.65rem);
  font-size: 1.7rem;
  font-weight: 700;
`;
