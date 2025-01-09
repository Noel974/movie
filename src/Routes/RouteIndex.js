import React from "react";
import { Route, Routes } from "react-router-dom";
import Apropos from "../pages/Apropos";
import Coup from "../pages/Coup";
import Home from "../pages/Home";

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coup-de-coeur" element={<Coup />} />
      <Route path="a-propos" element={<Apropos />} />
    </Routes>
  );
};

export default RouteIndex;
