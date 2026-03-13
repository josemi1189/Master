import { PropsWithChildren } from "react";
import { Header } from "./layout/components/header";

interface Props {
  children: React.ReactNode;
}
export const AppLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="container">
      <Header />

      <main>{children}</main>
    </div>
  );
};
