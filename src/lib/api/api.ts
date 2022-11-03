import axios from "axios";

const instance = axios.create({
  baseURL: "https://preonboarding.platdev.net/api"
});

interface GetCarsDataParas {
  fuelType: "gasoline" | "hybrid" | "ev" | "";
  segment: "C" | "D" | "E" | "SUV" | "";
}

export const getCarsInfo = async (
  fuelType: GetCarsDataParas["fuelType"] = "",
  segment: GetCarsDataParas["segment"] = ""
) => {
  const { data } = await instance.get(
    `/cars?fuelType=${fuelType}&segment=${segment}`
  );
  return data;
};
