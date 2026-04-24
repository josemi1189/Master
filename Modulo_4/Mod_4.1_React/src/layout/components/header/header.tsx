import style from "./header.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.logo}>
          <Link to={switchRoutes.home}>
            <img src="/logo.webp" alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
