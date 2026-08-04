import { HeaderPage, Footer } from "@/components/layout";
import { Outlet } from "@tanstack/react-router";

export const PageLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
