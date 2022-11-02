import { useEffect, useState } from "react";

const useCalculateDate = (dateString: string) => {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const calculateDate = (date: string) => {
    const createDate = new Date(date);

    const createDateToTime = new Date(date).getTime();
    const now = Date.now();
    const amountTimeFromNow = now - createDateToTime;
    const amountTimeForSeconds = amountTimeFromNow / 1000;

    const time = {
      minute: Math.floor((amountTimeForSeconds % 3600) / 60),
      hour: Math.floor(amountTimeForSeconds / 3600),
      day: Math.floor(amountTimeForSeconds / (3600 * 24)),
      date: createDate.getDate(),
      month: createDate.getMonth() + 1,
      year: createDate.getFullYear()
    };

    setMinute(time.minute);
    setHour(time.hour);
    setDay(time.day);
    setDate(time.date);
    setMonth(time.month);
    setYear(time.year);
  };

  useEffect(() => {
    calculateDate(dateString);
  }, [dateString]);

  return { minute, hour, day, date, month, year };
};

export default useCalculateDate;
