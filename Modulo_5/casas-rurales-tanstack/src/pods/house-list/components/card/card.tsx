import { House as HouseVM } from "#pods/house-list";
import style from "./card.module.scss";
import { MarkReserved } from "../reserved-marked";
//import { useContextReserved } from "@/hooks/useContextReserved";
import { BathroomsIcon, BedIcon, BedroomsIcon } from "#components/icons";
//import { ShowRating } from "#components/show-rating";
import { Image } from "@unpic/react";
import { Link } from "@tanstack/react-router";
interface Props {
  house: HouseVM;
  index: number;
}

export const Card: React.FC<Props> = (props) => {
  const { house, index } = props;
  //const { getIsReserve } = useContextReserved();
  //const isReserve = getIsReserve(house.id);
  const isReserve = false;
  return (
    <article className={style.card}>
      <Link
        to="/detalle/$id"
        params={{ id: house.id }}
        aria-label={`Ir a página de detalle de ${house.name}`}
      >
        <div className={style.image}>
          <Image
            src={house.image}
            width={340}
            height={340}
            className={isReserve ? style.isReserved : ""}
            alt={`${house.name}. Ubicada en ${house.address}, ${house.city}. ${isReserve ? "Estado: Reservada" : ""} `}
            loading={index < 3 ? "eager" : "lazy"}
          />
          {isReserve && <MarkReserved />}
          <div className={style.rating}>
            {/*<ShowRating
              rating={house.rating}
              totalReviews={house.totalReviews}
            />*/}
          </div>
        </div>
        <footer className={style.content}>
          <span className={style.name}>{house.name}</span>
          <span
            className={style.address}
          >{`${house.address} (${house.city})`}</span>
          <div className={style.details}>
            <div
              aria-label="Número de habitaciones"
              title={`${house.bedrooms} habitaciones`}
            >
              <BedroomsIcon />
              <span>{house.bedrooms}</span>
            </div>
            <div
              aria-label="Número de baños"
              title={`${house.bathrooms} baños`}
            >
              <BathroomsIcon />
              <span>{house.bathrooms}</span>
            </div>
            <div aria-label="Número de camas" title={`${house.beds} camas`}>
              <BedIcon /> <span>{house.beds}</span>
            </div>
          </div>
          <div>
            <span className={style.price}>{`${house.price}€`}</span>
            <span className={style.labelNight}>/noche</span>
          </div>
        </footer>
      </Link>
    </article>
  );
};
