import { Image } from "@/Components";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface CardItemProps {
  id: number;
  name: string;
  brand: string;
  segment: string;
  fuelType: string;
  amount: number;
  imageUrl: string;
}

const CardItem = ({
  id,
  name,
  brand,
  segment,
  fuelType,
  amount,
  imageUrl
}: CardItemProps) => {
  const [isNew, setIsNew] = useState(false);

  const handleIsNew = (date: string) => {
    const now = new Date();
  };

  return (
    <Container data-id={id}>
      <InfoContainer>
        <BrandNameContainer>
          <h2>{brand}</h2>
          <h2>{name}</h2>
        </BrandNameContainer>
        <SegmentFuelAmountContainer>
          <div>
            <span>{segment}</span> / <span>{fuelType}</span>
          </div>
          <span>월 {amount} 원 부터</span>
        </SegmentFuelAmountContainer>
      </InfoContainer>
      <ImageContainer isNew={isNew}>
        <ImageWrapper>
          <Image src={imageUrl} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
};

export default CardItem;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.second100};
`;

const InfoContainer = styled.div`
  padding: 0.4rem 0;
`;
const BrandNameContainer = styled.div`
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  margin-bottom: 0.8rem;
`;
const SegmentFuelAmountContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;
const ImageContainer = styled.div<{ isNew: boolean }>`
  position: relative;

  &::after {
    position: absolute;
    top: -1.2rem;
    right: -1.2rem;
    content: "신규";
    ${({ theme }) => {
      return css`
        background-color: ${theme.color.primary100};
        color: ${theme.color.fontWhite};
      `;
    }}
    font-size: 1.2rem;
    line-height: 15px;
    font-weight: 700;
    word-break: keep-all;
    border: 0;
    border-radius: 4.2rem;
    padding: 0.4rem 1.4rem 0.3rem 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 15.2rem;
  aspect-ratio: 1.9/1;
`;
