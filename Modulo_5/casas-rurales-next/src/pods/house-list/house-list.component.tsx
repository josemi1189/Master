"use client";
import React, { useMemo } from "react";
import { Card } from "./components/card";
import { House } from "./house.vm";
import style from "./house-list.module.scss";

import { HouseSearch } from "./components/house-search/house-search";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";

interface Props {
  houses: House[];
}

export const HouseList: React.FC<Props> = ({ houses }) => {
  const { search, setSearch, filterDebounce } = useDebouncedSearch();
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
        <HouseSearch search={search} setSearch={setSearch} />
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
