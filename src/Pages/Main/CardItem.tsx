import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { Image } from "@/Components";
import { useCalculateDate, useChangeAmountToLocalString } from "@/lib/hooks";
import useChangeFuelSegmentEnumToKorean from "@/lib/hooks/useChangeFuelSegmentEnumToKorean";
import { Link } from "react-router-dom";

interface CardItemProps {
  id: number;
  name: string;
  brand: string;
  segment: "C" | "D" | "E" | "SUV";
  fuelType: "gasoline" | "hybrid" | "ev";
  amount: number;
  imageUrl: string;
  createdAt: string;
}

const CardItem = ({
  id,
  name,
  brand,
  segment,
  fuelType,
  amount,
  imageUrl,
  createdAt
}: CardItemProps) => {
  const [isNew, setIsNew] = useState(false);
  const { day } = useCalculateDate(createdAt);
  const { fuel: fuelKorean, segment: segmentKorean } =
    useChangeFuelSegmentEnumToKorean(fuelType, segment);
  const amountKorea = useChangeAmountToLocalString(amount, "ko-KR");

  useEffect(() => {
    if (day < 2) {
      setIsNew(true);
    }
  }, [day]);

  return (
    <Container data-id={id}>
      <Link to={`${id}?brand=${brand}&name=${name}`}>
        <InfoContainer>
          <BrandNameContainer>
            <h2>{brand}</h2>
            <h2>{name}</h2>
          </BrandNameContainer>
          <SegmentFuelAmountContainer>
            <div>
              <span>{segmentKorean}</span> / <span>{fuelKorean}</span>
            </div>
            <span>월 {amountKorea} 원 부터</span>
          </SegmentFuelAmountContainer>
        </InfoContainer>
        <ImageContainer isNew={isNew}>
          <ImageWrapper>
            <Image src={imageUrl} />
          </ImageWrapper>
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default CardItem;

const Container = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.color.second100};
  }
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
    ${({ isNew }) => {
      if (isNew) {
        return css`
          visibility: visible;
        `;
      }
      return css`
        visibility: hidden;
      `;
    }}

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
