import { Link } from "@tanstack/react-router";
import style from "./header.module.scss";
import { LogoImage } from "./logo-image";

export const HeaderPage: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.head}>
        <LogoImage />
        <h1 className={style.title}>Encuentra tu casa rural</h1>
      </div>
      <Link to="/" aria-label="Página principal" className={style.link}>
        Inicio
      </Link>
    </header>
  );
};
