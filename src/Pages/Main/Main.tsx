import React from "react";
import { Meta, SelectButton } from "@/Components";
import styled from "styled-components";

import { useGetCarsData } from "./hooks";
import CardItem from "./CardItem";

const CARS_OPTION = [
  { id: "all", option: "전체", selected: false },
  { id: "E", option: "대형", selected: false },
  { id: "D", option: "중형", selected: false },
  { id: "C", option: "소형", selected: false }
];

const Main = () => {
  const { data: cars, error, isError } = useGetCarsData({ querykey: ["cars"] });

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <>
      <Container>
        <SelectButtonContainer>
          {CARS_OPTION.map(({ id, option, selected }) => (
            <SelectButton key={id} selected={selected}>
              {option}
            </SelectButton>
          ))}
        </SelectButtonContainer>
        <CardItemContainer>
          {cars?.map(
            ({
              id,
              attribute: { name, brand, fuelType, segment, imageUrl },
              amount,
              createdAt
            }) => (
              <CardItem
                key={id}
                id={id}
                name={name}
                brand={brand}
                segment={segment}
                fuelType={fuelType}
                amount={amount}
                imageUrl={imageUrl}
                createdAt={createdAt}
              />
            )
          )}
        </CardItemContainer>
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div``;

const SelectButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow-y: auto;
  width: 100%;
  padding: 0.6rem 1.2rem;
  gap: 0.7rem;
  border-bottom: 1px solid ${(props) => props.theme.color.second100};
`;

const CardItemContainer = styled.ul``;
