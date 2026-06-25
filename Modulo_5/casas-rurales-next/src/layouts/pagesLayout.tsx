import { Header } from "@/components/header";
import React from "react";

export const PagesLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
