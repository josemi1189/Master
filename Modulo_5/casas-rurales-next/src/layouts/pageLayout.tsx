import { HeaderPage, Footer } from "@/layouts";

export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
      <Footer />
    </>
  );
};
