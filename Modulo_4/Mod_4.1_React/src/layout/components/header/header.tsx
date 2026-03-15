import { useContext } from "react";
import style from "./header.module.scss";
import { SearchIcon } from "@/common/icons";
import { SearchContext } from "@/core/context/search.context";
import React from "react";

export const Header = () => {
  const [value, setValue] = React.useState("Lemoncode");
  const { setFilter } = useContext(SearchContext);

  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.logo}>
          <img src="/logo_lemoncode.png" alt="Logo LemonCode" />
        </div>
        <div className={style.search}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            className={style.input}
          />
          <button className={style.btn} onClick={() => setFilter(value)}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
};
