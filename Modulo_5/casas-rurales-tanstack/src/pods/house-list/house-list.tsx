import { House } from "./house.vm";
import style from "./house-list.module.scss";
import { Card } from "./components/card";
//import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";

interface Props {
  houses: House[];
}

export const HouseList = ({ houses }: Props) => {
  //const houseList = getHouseList().then(mapHouseListToVM);
  //const { search, setSearch, filterDebounce } = useDebouncedSearch();
  /*const filteredHouses = useMemo(
    () =>
      houses.filter(
        (house) =>
          house.name.toLowerCase().includes(filterDebounce) ||
          house.city.toLowerCase().includes(filterDebounce),
      ),
    [houses, filterDebounce],
  );*/

  return (
    <>
      <div className={style.container}>
        <div className={style.search}>
          {/*<HouseSearch search={search} setSearch={setSearch} />*/}
        </div>
      </div>
      <section className={style.content}>
        {/*filteredHouses.length ? (
          filteredHouses.map((house) => <Card key={house.id} house={house} />)
        ) : (
          <p className={style.notFound}>Sin resultados de búsqueda</p>
        )*/}
        {houses.length ? (
          houses.map((house, index) => (
            <Card key={house.id} house={house} index={index} />
          ))
        ) : (
          <p className={style.notFound}>Sin resultados de búsqueda</p>
        )}
      </section>
    </>
  );
};
