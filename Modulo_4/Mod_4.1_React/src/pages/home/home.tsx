import { Card } from "@/common/card";
import style from "./home.module.scss";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";

export const Homepage = () => {
  return (
    <div className={style.container}>
      <Link to={switchRoutes.members}>
        <Card urlImage="/logo_lemoncode.png" title={"LemonCode"} />
      </Link>
    </div>
  );
};
