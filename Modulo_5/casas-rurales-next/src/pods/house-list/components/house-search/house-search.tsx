import React from "react";
import style from "./house-search.module.scss";
import { CloseIcon } from "@/components/icons";

interface Props {
  search: string;
  setSearch: (filter: string) => void;
}
export const HouseSearch: React.FC<Props> = ({ search, setSearch }) => {
  const clearSearch = () => setSearch("");

  return (
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
  );
};
