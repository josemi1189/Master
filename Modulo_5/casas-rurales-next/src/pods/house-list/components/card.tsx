import Image from "next/image";
import { House as HouseVM } from "@/pods/house-list";
import style from "./card.module.scss";
import Link from "next/link";
import { routes } from "@/core/constants";
//import { formatToSlug } from "@/helpers";

interface Props {
  house: HouseVM;
}

export const Card: React.FC<Props> = ({ house }) => {
  // TODO: Eliminar comentario y método si no se utiliza finalmente
  //const slug: string = formatToSlug(house.name);

  return (
    <article className={style.card}>
      <Link href={`${routes.detalle}/${house.id}`}>
        <Image
          src={house.image}
          width={320}
          height={320}
          className={style.image}
          style={{ objectFit: "cover" }}
          alt={`${house.description} ubicada en ${house.address}`}
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
