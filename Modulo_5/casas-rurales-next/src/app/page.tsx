import { MainLayout } from "@/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casas rurales",
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
};
export default function Home() {
  return (
    <MainLayout>
      <h1>Casas rurales</h1>
    </MainLayout>
  );
}
