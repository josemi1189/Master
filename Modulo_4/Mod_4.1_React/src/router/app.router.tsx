import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { Home } from "@/pages";
import { AppLayout } from "@/layout";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={switchRoutes.home} element={<Home />} />
          <Route path={switchRoutes.basico} element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};
