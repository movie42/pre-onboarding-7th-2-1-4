import React, { useEffect } from "react";

import { getCarsInfo } from "@/lib/api";

const Main = () => {
  const response = async () => {
    const response = await getCarsInfo();
    console.log(response);
  };

  useEffect(() => {
    response();
  }, []);
  return <div>Main</div>;
};

export default Main;
