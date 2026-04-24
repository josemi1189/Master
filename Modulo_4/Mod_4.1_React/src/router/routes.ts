import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  home: string;
  details: string;
  miembros: string;
  rickandmorty: string;
}

export const switchRoutes: SwitchRoutes = {
  home: "/",
  details: "detalle/:id",
  miembros: "/miembros/",
  rickandmorty: "/rickandmorty/",
};

interface Routes extends Omit<SwitchRoutes, "details"> {
  details: (id: string) => string;
}
export const routes: Routes = {
  ...switchRoutes,
  details: (id: string) => generatePath(switchRoutes.details, { id }),
};
