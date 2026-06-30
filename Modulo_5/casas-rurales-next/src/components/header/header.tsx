import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <nav className={style.header}>
      <Link href="/" aria-label="Página principal" className={style.link}>
        <Image
          aria-label="Logo de casas rurales"
          src="/logo.png"
          alt="Logo de Casas Rurales"
          width={340}
          height={140}
        />
      </Link>
    </nav>
  );
};
