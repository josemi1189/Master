import style from "./header.module.scss";
import { LogoImage } from "./logo-image";

export const HeaderMain: React.FC = () => {
  return (
    <header className={style.header}>
      <LogoImage />
    </header>
  );
};
