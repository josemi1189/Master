import React from "react";
import LogoLemonCode from "@/assets/images/logo-lemoncode.svg";
import styles from "./logoLemoncode.module.scss";

export const LogoLemoncode = (): React.JSX.Element => {
  return (
    <img className={styles.logo} src={LogoLemonCode} alt="Logo de LemonCode" />
  );
};
