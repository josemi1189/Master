import Image from "next/image";
import { House as HouseVM } from "@/pods/house-list";
import style from "./card.module.scss";
import Link from "next/link";
import { routes } from "@/core/constants";

interface Props {
  house: HouseVM;
}

export const Card: React.FC<Props> = ({ house }) => {
  return (
    <article className={style.card}>
      <Link
        href={`${routes.detalle}/${house.id}`}
        aria-label={`Ir a página de detalle de ${house.name}`}
      >
        <Image
          src={house.image}
          width={340}
          height={340}
          className={style.image}
          style={{ objectFit: "cover" }}
          alt={`${house.description} ubicada en ${house.address}, ${house.city}`}
          loading="eager"
        />
        <div className={style.content}>
          <span className={style.name}>{house.name}</span>
          <span className={style.price}>{`${house.price} €`}</span>
        </div>
      </Link>
    </article>
  );
};
