import { useEffect, useState } from "react";

const useChangeAmountToLocalString = (
  amount: number,
  local: Intl.LocalesArgument
) => {
  const [amountLocalString, setAmountToLocalString] = useState("");

  useEffect(() => {
    setAmountToLocalString(amount.toLocaleString(local));
  }, [amount]);

  return amountLocalString;
};

export default useChangeAmountToLocalString;
