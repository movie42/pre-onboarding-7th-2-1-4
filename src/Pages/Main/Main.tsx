import React from "react";

import { useGetCarsData } from "./hooks";

const Main = () => {
  const { data: cars, error, isError } = useGetCarsData({ querykey: ["cars"] });

  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      <ul>
        {cars?.map((car) => (
          <li key={car.id}>{car.attribute.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
