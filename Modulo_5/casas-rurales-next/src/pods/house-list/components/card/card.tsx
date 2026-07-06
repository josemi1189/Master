import Image from "next/image";
import { House as HouseVM } from "@/pods/house-list";
import style from "./card.module.scss";
import Link from "next/link";
import { routes } from "@/core/constants";
import { MarkReserved } from "../reserved-marked";
import { useContextReserved } from "@/hooks/useContextReserved";
interface Props {
  house: HouseVM;
}

export const Card: React.FC<Props> = ({ house }) => {
  const { getIsReserve } = useContextReserved();
  const isReserve = getIsReserve(house.id);
  return (
    <article className={style.card}>
      <Link
        href={`${routes.detalle}/${house.id}`}
        aria-label={`Ir a página de detalle de ${house.name}`}
      >
        <div className={style.image}>
          <Image
            src={house.image}
            width={340}
            height={340}
            className={isReserve ? style.isReserved : ""}
            style={{ objectFit: "cover" }}
            alt={`${house.name}. Ubicada en ${house.address}, ${house.city}. ${isReserve ? "Estado: Reservada" : ""} `}
            loading="eager"
          />
          {isReserve && <MarkReserved />}
        </div>
        <footer className={style.content}>
          <span className={style.name}>{house.name}</span>
          <span className={style.price}>{`${house.price} €`}</span>
        </footer>
      </Link>
    </article>
  );
};
