import { HeaderMain, Footer } from "@/components/layouts";

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <main>{children}</main>
      <Footer />
    </>
  );
};
