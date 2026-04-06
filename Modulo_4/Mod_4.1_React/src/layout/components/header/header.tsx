import { useContext } from "react";
import style from "./header.module.scss";
import { SearchContext } from "@/core/context/search.context";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";
import { Button } from "@mui/material";
import { Search } from "@mui/icons-material";

export const Header = () => {
  const { organization, setOrganization } = useContext(SearchContext);
  const [value, setValue] = React.useState(organization);

  return (
    <header className={style.header}>
      <div className={style.content}>
        <div className={style.logo}>
          <Link to={switchRoutes.home}>
            <img src="/logo_lemoncode.png" alt="Logo LemonCode" />
          </Link>
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
          {/*<button className={style.btn} onClick={() => setOrganization(value)}>
            <SearchIcon />
          </button>*/}
          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={() => setOrganization(value)}
          >
            <Search />
          </Button>
        </div>
      </div>
    </header>
  );
};
