import MainLayouts from "@/Components/Layouts/MainLayouts";
import { Details, Main } from "@/Pages";
import React from "react";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Main />} />
        <Route path="/:carId" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default Router;
