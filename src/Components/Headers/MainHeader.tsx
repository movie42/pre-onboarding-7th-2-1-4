import React from "react";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <Header>
      <h1>전체차량</h1>
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0 1.9rem;
  border-bottom: 1px solid ${(props) => props.theme.color.second100};
  h1 {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 700;
  }
`;
