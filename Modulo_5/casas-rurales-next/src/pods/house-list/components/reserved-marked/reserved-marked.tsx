import Image from "next/image";
import style from "./reserved-marked.module.scss";

export const ReservedMarked = () => {
  return (
    <Image
      src={"/reserved.png"}
      alt="Casa rural reservada"
      width={80}
      height={80}
      aria-hidden={true}
      className={style.reservedBadge}
    />
  );
};
