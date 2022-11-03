import { Route, Routes } from "react-router-dom";
import { DetailLayout, MainLayout } from "@/Components";
import { Details, Main } from "@/Pages";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
      </Route>
      <Route path="/:carId" element={<DetailLayout />}>
        <Route index element={<Details />} />
      </Route>
    </Routes>
  );
};

export default Router;
