import { PropsWithChildren } from "react";
import { Footer, Header } from "@/layout/components/";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
