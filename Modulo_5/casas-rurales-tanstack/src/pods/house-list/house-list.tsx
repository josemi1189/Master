import React from "react";
import { House } from "./house.vm";
import { Card, HouseSearch } from "./components";
import { useDebouncedSearch } from "#hooks/useDebouncedSearch";
import style from "./house-list.module.scss";

interface Props {
  houses: House[];
}

export const HouseList = ({ houses }: Props) => {
  const { search, setSearch, filterDebounce } = useDebouncedSearch();
  const filteredHouses = React.useMemo(
    () =>
      houses.filter(
        (house) =>
          house.name.toLowerCase().includes(filterDebounce) ||
          house.city.toLowerCase().includes(filterDebounce),
      ),
    [houses, filterDebounce],
  );

  return (
    <div className={style.container}>
      <div className={style.search}>
        <HouseSearch search={search} setSearch={setSearch} />
      </div>
      <section className={style.content}>
        {!filteredHouses && (
          <p className={style.error}>Cargando casas rurales...</p>
        )}

        {houses && filteredHouses.length ? (
          filteredHouses.map((house, index) => (
            <Card index={index} key={house.id} house={house} />
          ))
        ) : (
          <p className={style.error}>No encontramos lo que buscas</p>
        )}
      </section>
    </div>
  );
};
