import { getCarsInfo } from "@/lib/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface GetCarsDataQueryProps {
  querykey: string[];
}

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
const useGetCarsData = ({ querykey }: GetCarsDataQueryProps) => {
  const carsQueryClient = useQueryClient();
  return useQuery<GetCarsData, AxiosError, CarsData[]>(
    querykey,
    async () => await getCarsInfo(),
    {
      select: ({ payload }) => {
        return payload;
      },
      onSuccess: () => {
        carsQueryClient.invalidateQueries(querykey);
      },
      onError: (error) => {
        return error;
      },
      retry: 10,
      staleTime: 100000
    }
  );
};

export default useGetCarsData;
