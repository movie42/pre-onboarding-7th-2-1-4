import { useState } from "react";
type FuelType = "gasoline" | "hybrid" | "ev";
type SegmentType = "C" | "D" | "E" | "SUV";

const fuelKorean = { gasoline: "가솔린", ev: "전기", hybrid: "하이브리드" };
const segmentKorean = { C: "소형", D: "중형", E: "대형", SUV: "SUV" };

const useChangeFuelSegmentEnumToKorean = () => {
  const [fuel, setFuel] = useState("");
  const [segment, setSegment] = useState("");

  const changeFuelToKorean = (fuelType: FuelType) => {
    setFuel(fuelKorean[fuelType]);
  };

  const changeSegmentToKorean = (segmentType: SegmentType) => {
    setSegment(segmentKorean[segmentType]);
  };

  return { fuel, segment, changeFuelToKorean, changeSegmentToKorean };
};

export default useChangeFuelSegmentEnumToKorean;
