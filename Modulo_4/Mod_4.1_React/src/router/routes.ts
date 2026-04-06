interface SwitchRoutes {
  home: string;
  members: string;
  details: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: "/detalle/:id",
  members: "/miembros",
};
