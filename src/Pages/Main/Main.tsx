import React, { useEffect, useState } from "react";
import { Loading, SelectButton } from "@/Components";
import styled from "styled-components";

import { useGetCarsData } from "./hooks";
import CardItem from "./CardItem";
import { useLocation, useNavigate } from "react-router-dom";
import { findQueryString } from "@/lib/utils";

const CARS_BUTTON_OPTIONS = [
  { segment: "all", option: "전체" },
  { segment: "E", option: "대형" },
  { segment: "D", option: "중형" },
  { segment: "C", option: "소형" },
  { segment: "SUV", option: "SUV" }
];

type Segment = "C" | "D" | "E" | "SUV" | "";
type FuelType = "gasoline" | "hybrid" | "ev" | "";

const Main = () => {
  const [segment, setSegment] = useState<Segment>("");
  const [fuelType, setFuelType] = useState<FuelType>("");
  const { search } = useLocation();
  const navigate = useNavigate();
  const {
    data: cars,
    error,
    isError,
    refetch,
    isLoading
  } = useGetCarsData({ queryKey: ["cars", fuelType, segment] });

  const handleSearch = (segment: string) => () => {
    if (segment === "all") {
      navigate("/");
      return;
    }
    navigate(`?segment=${segment}`);
  };

  useEffect(() => {
    const segment = findQueryString("segment", search) as Segment;
    const fuel = findQueryString("fuelType", search) as FuelType;

    if (!segment) {
      setSegment("");
    } else {
      setSegment(segment);
    }
    if (!fuel) {
      setFuelType("");
    } else {
      setFuelType(fuel);
    }
  }, [search]);

  useEffect(() => {
    refetch();
  }, [fuelType, segment]);

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <SelectButtonContainer>
          {CARS_BUTTON_OPTIONS.map(({ segment, option }) => (
            <SelectButton
              key={segment}
              segment={segment}
              onClick={handleSearch(segment)}
            >
              {option}
            </SelectButton>
          ))}
        </SelectButtonContainer>
        <CardItemContainer>
          {cars?.length === 0 ? (
            <NotFoundCars>
              <h2>차량이 없습니다.</h2>
            </NotFoundCars>
          ) : null}
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
const NotFoundCars = styled.div`
  display: grid;
  place-content: center;
  height: calc(100vh - 9.65rem);
  font-size: 1.7rem;
  font-weight: 700;
`;

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
