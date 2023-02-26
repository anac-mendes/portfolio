import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Gallery from "../components/Gallery";
import Home from "../components/Home";

const baseRoute = "/new-portfolio";

const Router = () => {
  return (
    <Routes>
      <Route path={baseRoute} element={<Home />} />
      <Route path={`${baseRoute}/work/:workName`} element={<Gallery />} />
      <Route path="*" element={<Navigate replace to={baseRoute} />} />
    </Routes>
  );
};

export default Router;
