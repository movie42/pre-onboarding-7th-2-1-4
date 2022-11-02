import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import IconButton from "../Button/IconButton";
import { useNavigate } from "react-router-dom";

const DetailHeader = () => {
  const navigate = useNavigate();

  const handleGoToBefore = () => {
    navigate(-1);
  };

  return (
    <Header>
      <IconButton onClick={handleGoToBefore} accessibilityText="뒤로가기">
        <FiArrowLeft />
      </IconButton>
      <div>
        <h1>차량상세</h1>
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
