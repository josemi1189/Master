import { PropsWithChildren } from "react";
import { Header } from "./components/header";

interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};
