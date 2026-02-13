import React from "react";
import styles from "./saludo.module.scss";

export const Saludo: React.FC = (): React.JSX.Element => {
  return (
    <>
      <span>Modo: {process.env.NODE_ENV}</span>
      <span>URL: {process.env.WEBPACK_API_BASE}</span>
      <h1 className={styles.title}>¡Hola mundo!</h1>
    </>
  );
};
