import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

import { MembersPage, MemberDetail } from "@/pages";
import { AppLayout } from "@/layout/layout";
import { SearchProvider } from "@/core/context/search.context";
import { MemberListProvider } from "@/core/context/memberList.context";
import { Homepage } from "@/pages/home/home";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <MemberListProvider>
          <AppLayout>
            <Routes>
              <Route path={switchRoutes.home} element={<Homepage />} />
              <Route path={switchRoutes.members} element={<MembersPage />} />
              <Route path={switchRoutes.details} element={<MemberDetail />} />
            </Routes>
          </AppLayout>
        </MemberListProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};
