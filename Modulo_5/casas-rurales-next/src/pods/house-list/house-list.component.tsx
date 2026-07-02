import { Card } from "./components/card";
import { House } from "./house.vm";
import style from "./house-list.module.scss";
import { CloseIcon } from "@/components/icons";
interface Props {
  houses: House[];
}
export const HouseList: React.FC<Props> = ({ houses }) => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Casas rurales</h1>
        <div className={style.searchContainer}>
          <label htmlFor="filter" className="sr-only">
            Filtro por nombre
          </label>
          <input
            type="text"
            id="filter"
            name="filter"
            className={style.searchInput}
            placeholder="Buscar..."
          />
          <button type="button" className={style.clearBtn}>
            <CloseIcon />
          </button>
        </div>
      </div>
      <section className={style.content}>
        {houses && houses.map((house) => <Card key={house.id} house={house} />)}
      </section>
    </>
  );
};
