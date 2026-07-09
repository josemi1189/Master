import type { Metadata } from "next";
import "../assets/css/global-styles.scss";
import React from "react";
import { ReservesProvider } from "@/contexts/reservesContext/reservesContext";
import { METADATA } from "@/core/constants/metadata.constant";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <ReservesProvider>{children}</ReservesProvider>
      </body>
    </html>
  );
}
