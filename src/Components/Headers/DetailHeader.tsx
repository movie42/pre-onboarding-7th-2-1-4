import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
const DetailHeader = () => {
  return (
    <Header>
      <ArrowContainer>
        <span className="hidden-text">뒤로가기</span>
        <FiArrowLeft />
      </ArrowContainer>
      <div>
        <h1>전체 차량</h1>
      </div>
    </Header>
  );
};

export default DetailHeader;

const Header = styled.header`
  display: grid;
  grid-template-columns: 5rem auto;
  place-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0 1.9rem;
  border-bottom: 1px solid ${(props) => props.theme.color.second100};
  h1 {
    margin-left: -5rem;
    text-align: center;
    font-size: 1.7rem;
    font-weight: 700;
  }
`;

const ArrowContainer = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 2rem;
  .hidden-text {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px -1px;
    top: -1px;
    left: -1px;
  }
`;
