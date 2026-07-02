import { HeaderMain, Footer } from "@/layouts";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <Footer />
    </>
  );
};
