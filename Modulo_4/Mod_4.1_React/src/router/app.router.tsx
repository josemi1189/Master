import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { MembersPage, MemberDetail, Rickandmorty } from "@/pages";
import { AppLayout } from "@/layout/layout";
import { SearchProvider } from "@/core/context/search.context";
import { MemberListProvider } from "@/core/context/memberList.context";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <MemberListProvider>
          <AppLayout>
            <Routes>
              <Route path={switchRoutes.home} element={<MembersPage />} />
              <Route path={switchRoutes.details} element={<MemberDetail />} />
              <Route
                path={switchRoutes.rickandmorty}
                element={<Rickandmorty />}
              />
            </Routes>
          </AppLayout>
        </MemberListProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};
