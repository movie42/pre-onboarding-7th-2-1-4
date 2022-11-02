import {
  useCalculateDate,
  useChangeAmountToLocalString,
  useChangeFuelSegmentEnumToKorean
} from "@/lib/hooks";
import { useEffect, useState } from "react";

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
  insurance: {
    name: string;
    description: string;
  }[];
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}

interface newCarsData {
  id: number;
  imageUrl: string;
  name: string;
  brand: string;
  insurance: { name: string; description: string }[];
  amount: string;
  carInfoList: { name: string; description: string }[];
  additionalProducts: { name: string; amount: string }[];
}

const defaultValue = {
  id: 0,
  imageUrl: "",
  name: "",
  brand: "",
  insurance: [{ name: "", description: "" }],
  amount: "",
  carInfoList: [{ name: "", description: "" }],
  additionalProducts: [{ name: "", amount: "" }]
};

const useChangeDetailData = (data?: CarsData) => {
  const [detail, setDetail] = useState<newCarsData>(defaultValue);
  const { amountLocalString, changeLocalString } =
    useChangeAmountToLocalString();
  const { changeLocalString: changeAdditionalAmout } =
    useChangeAmountToLocalString();
  const {
    fuel: fuelKorean,
    segment: segmentKorean,
    changeFuelToKorean,
    changeSegmentToKorean
  } = useChangeFuelSegmentEnumToKorean();
  const { month, week, date, calculateDate } = useCalculateDate();

  useEffect(() => {
    if (data) {
      const {
        id,
        startDate,
        attribute: { imageUrl, name, brand, fuelType, segment },
        insurance,
        additionalProducts,
        amount
      } = data;

      const carInfoList = [
        { name: "차종", description: segmentKorean },
        { name: "연료", description: fuelKorean },
        {
          name: "이용 가능일",
          description: `${month}월 ${date}일 (${week}) 부터`
        }
      ];
      changeFuelToKorean(fuelType);
      changeSegmentToKorean(segment);
      calculateDate(startDate);
      changeLocalString(amount, "ko-KR");

      const newAdditionalProducts = additionalProducts.map((value) => ({
        name: value.name,
        amount: `월 ${changeAdditionalAmout(value.amount, "ko-KR")} 원`
      }));

      setDetail({
        id,
        imageUrl,
        name,
        brand,
        insurance,
        amount: amountLocalString,
        carInfoList,
        additionalProducts: newAdditionalProducts
      });
    }
  }, [data]);

  return detail;
};

export default useChangeDetailData;
