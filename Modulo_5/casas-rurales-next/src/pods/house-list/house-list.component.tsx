import { Card } from "../card";
import { House } from "./house.vm";
import style from "./house-list.module.scss";
interface Props {
  houses: House[];
}
export const HouseList: React.FC<Props> = ({ houses }) => {
  return (
    <div className={style.container}>
      <h1>Casas rurales</h1>
      <section className={style.content}>
        {houses && houses.map((house) => <Card key={house.id} house={house} />)}
      </section>
    </div>
  );
};
