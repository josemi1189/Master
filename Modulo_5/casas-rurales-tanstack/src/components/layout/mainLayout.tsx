import { HeaderMain, Footer } from "@/components/layout";
import { Outlet } from "@tanstack/react-router";

export const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderMain />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
