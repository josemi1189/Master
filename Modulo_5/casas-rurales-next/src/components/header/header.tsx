import Link from "next/link";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <nav className={style.header}>
      <Link href="/" aria-label="Página principal" className={style.link}>
        Casas rurales
      </Link>
      <input type="text" className={style.search} />
    </nav>
  );
};
