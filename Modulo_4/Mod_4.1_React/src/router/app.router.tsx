import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { MembersPage } from "@/pages";
import { AppLayout } from "@/layout/layout";
import { SearchProvider } from "@/core/context/search.context";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <AppLayout>
          <Routes>
            <Route path={switchRoutes.home} element={<MembersPage />} />
            <Route path={switchRoutes.details} element={<MembersPage />} />
          </Routes>
        </AppLayout>
      </SearchProvider>
    </BrowserRouter>
  );
};
