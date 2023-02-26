import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Gallery from "../components/Gallery";
import Home from "../components/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:workName" element={<Gallery />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
