import type { Metadata } from "next";
import "../assets/css/global-styles.scss";
import React from "react";
import { ReservesProvider } from "@/contexts/reservesContext/reservesContext";

export const metadata: Metadata = {
  title: "Casas rurales - Next.js",
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
