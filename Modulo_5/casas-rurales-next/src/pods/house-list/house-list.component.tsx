"use client";
import React, { useMemo } from "react";
import { Card } from "./components/card";
import { House } from "./house.vm";
import style from "./house-list.module.scss";
import { CloseIcon } from "@/components/icons";
import { useDebounce } from "use-debounce";

interface Props {
  houses: House[];
}

export const HouseList: React.FC<Props> = ({ houses }) => {
  const [search, setSearch] = React.useState<string>("");
  const [filterDebounce] = useDebounce(search, 500);

  const clearSearch = () => setSearch("");

  const filteredHouses = useMemo(
    () =>
      houses.filter(
        (house) =>
          house.name.toLowerCase().includes(filterDebounce) ||
          house.city.toLowerCase().includes(filterDebounce),
      ),
    [houses, filterDebounce],
  );

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
            value={search}
            className={style.searchInput}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
            aria-label="Buscar casas"
          />
          <button
            type="button"
            className={style.clearBtn}
            onClick={clearSearch}
            aria-label="Limpiar búsqueda"
            disabled={!search}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      <section className={style.content}>
        {filteredHouses.length ? (
          filteredHouses.map((house) => <Card key={house.id} house={house} />)
        ) : (
          <p className={style.notFound}>Sin resultados de búsqueda</p>
        )}
      </section>
    </>
  );
};
