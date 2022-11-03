import React from "react";
import styled from "styled-components";

const NoImage = () => {
  return <Item>차량 이미지를 준비중입니다.</Item>;
};

export default NoImage;

const Item = styled.div`
  display: grid;
  color: ${(props) => props.theme.color.fontBlack};
  place-items: center;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.gray100};
`;
