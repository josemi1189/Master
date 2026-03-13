import React from "react";
import style from "./header.module.scss";
import { SearchIcon } from "@/common/icons";

export const Header = () => {
  const [filter, setFilter] = React.useState("lemoncode");
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="/logo_lemoncode.png" alt="Logo LemonCode" />
      </div>
      <div className={style.search}>
        <SearchIcon />
        <input
          type="text"
          value={filter}
          className={style.input}
          onChange={(e) => {
            setFilter(e.currentTarget.value);
          }}
        />
      </div>
    </header>
  );
};
