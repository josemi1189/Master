import type { Metadata } from "next";
import "../assets/css/global-styles.scss";
import React from "react";
import { ReservesProvider } from "@/contexts/reservesContext/reservesContext";

export const metadata: Metadata = {
  title: "Casas rurales",
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
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
