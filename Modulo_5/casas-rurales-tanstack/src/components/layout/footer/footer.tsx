import style from "./footer.module.scss";

export const Footer: React.FC = () => {
  const year = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className={style.footer}>
      &copy;{`${year()}`} José Miguel González Martín | Módulo 5 - Máster
      Lemoncode
    </footer>
  );
};
