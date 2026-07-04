"use client";
import style from "./check-reserve.module.scss";
import { useContextReserved } from "@/hooks/useContextReserved";

interface Props {
  houseID: string;
}
export const CheckReserve: React.FC<Props> = ({ houseID }) => {
  const { getIsReserve, handleReserve } = useContextReserved();
  return (
    <div>
      <label htmlFor="reserved" className={style.label}>
        Reservado
      </label>
      <input
        id="reserved"
        type="checkbox"
        value={"Reservado"}
        checked={getIsReserve(houseID)}
        onChange={() => handleReserve(houseID)}
        className={style.check}
      />
    </div>
  );
};
