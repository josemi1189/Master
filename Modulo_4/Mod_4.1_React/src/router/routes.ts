interface SwitchRoutes {
  home: string;
  details: string;
  rickandmorty: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: "/detalle/:id",
  rickandmorty: "/rickandmorty",
};
