import { useEffect, useState } from "react";

type FuelType = "gasoline" | "hybrid" | "ev" | undefined;
type SegmentType = "C" | "D" | "E" | "SUV" | undefined;

const fuelKorean = { gasoline: "가솔린", ev: "전기", hybrid: "하이브리드" };
const segmentKorean = { C: "소형", D: "중형", E: "대형", SUV: "SUV" };

const useChangeFuelSegmentEnumToKorean = (
  fuelType: FuelType,
  segmentType: SegmentType
) => {
  const [fuel, setFuel] = useState("");
  const [segment, setSegment] = useState("");

  useEffect(() => {
    if (fuelType) {
      setFuel(fuelKorean[fuelType]);
    }
  }, [fuelType]);

  useEffect(() => {
    if (segmentType) {
      setSegment(segmentKorean[segmentType]);
    }
  }, [segmentType]);

  return { fuel, segment };
};

export default useChangeFuelSegmentEnumToKorean;
