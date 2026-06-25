import Image from "next/image";
import { House } from "../house-list/house.vm";
import style from "./card.module.scss";
import Link from "next/link";
import { routes } from "@/core/constants";
import { formatToSlug } from "@/helpers";

interface Props {
  house: House;
}

export const Card: React.FC<Props> = ({ house }) => {
  console.log("House Card: ", house);
  return (
    <Link href={`${routes.detalle}/${formatToSlug(house.name)}`}>
      <div className={style.card}>
        <Image
          src={house.image}
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
          alt={`${house.description} ubicada en ${house.address}`}
          loading="eager"
        />
        <div className={style.content}>
          <span className={style.name}>{house.name}</span>
          <span className={style.price}>{house.price} €</span>
        </div>
      </div>
    </Link>
  );
};
