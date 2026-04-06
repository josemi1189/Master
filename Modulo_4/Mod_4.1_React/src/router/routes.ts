interface SwitchRoutes {
  home: string;
  members: string;
  details: string;
  rickandmorty: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: "/detalle/:id",
  members: "/miembros",
  rickandmorty: "/rickandmorty",
};
