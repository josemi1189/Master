interface SwitchRoutes {
  home: string;
  details: string;
  avanzado: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: "/detalle/:id",
  avanzado: "/avanzado",
};
