import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { path } from "./path";

import { Home } from "@/pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
