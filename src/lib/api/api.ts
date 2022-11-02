import axios from "axios";

const instance = axios.create({
  baseURL: "https://preonboarding.platdev.net/api/cars"
});

interface GetCarsDataParas {
  fuelType: "gasoline" | "hybrid" | "ev";
  segment: "C" | "D" | "E" | "SUV";
}

export const getCarsInfo = async () => {
  const { data } = await instance.get("");
  return data;
};

export const getCarsDetailInfo = async (
  fuelType: GetCarsDataParas["fuelType"],
  segment: GetCarsDataParas["segment"]
) => {
  const { data } = await instance.get(
    `?fuelType=${fuelType}&segment=${segment}`
  );

  return data;
};
