import { getCarsInfo } from "@/lib/api";
import { QueryKey, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface GetCarsDataQueryProps {
  queryKey: string[];
}

type Segment = "C" | "D" | "E" | "SUV" | "";
type FuelType = "gasoline" | "hybrid" | "ev" | "";

interface CarsData {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: "C" | "D" | "E" | "SUV";
    fuelType: "gasoline" | "hybrid" | "ev";
    imageUrl: string;
  };
  amount: number;
  insurance: [
    {
      name: string;
      description: string;
    },
    {
      name: string;
      description: string;
    }
  ];
  additionalProducts: [
    {
      name: string;
      amount: number;
    }
  ];
}

interface GetCarsData {
  payload: CarsData[];
}

const useGetCarsData = ({ queryKey }: GetCarsDataQueryProps) => {
  const carsQueryClient = useQueryClient();

  return useQuery<GetCarsData, AxiosError, CarsData[]>(
    queryKey,
    async () => {
      const [_, fuelType, segment] = queryKey;
      const fuel = fuelType as FuelType;
      const segmentType = segment as Segment;
      return await getCarsInfo(fuel, segmentType);
    },
    {
      select: ({ payload }) => {
        return payload;
      },
      onSuccess: () => {
        carsQueryClient.invalidateQueries(queryKey);
      },
      onError: (error) => {
        return error;
      },
      retry: 3,
      staleTime: 100000,
      cacheTime: 100000
    }
  );
};

export default useGetCarsData;
