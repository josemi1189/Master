import Link from "next/link";
import style from "./header.module.scss";

import { routes } from "@/core/constants";
import { LogoImage } from "./logo-image";

export const HeaderPage: React.FC = () => {
  return (
    <header className={style.header}>
      <LogoImage />
      <Link
        href={routes.home}
        aria-label="Página principal"
        className={style.link}
      >
        Inicio
      </Link>
    </header>
  );
};
