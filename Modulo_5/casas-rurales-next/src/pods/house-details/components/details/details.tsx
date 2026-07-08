import { House } from "@/pods/house-details";
import style from "./details.module.scss";

interface Props {
  house: House;
}
export const Details: React.FC<Props> = ({ house }) => {
  return (
    <div className={style.details}>
      <div className={style.groupColumn}>
        <dt className={style.termTitle}>Descripción</dt>
        <dd className={style.termDescription}>{house.description}</dd>
      </div>
      <div className={style.groupRow}>
        <dt className={style.termTitle}>Dirección:</dt>
        <dd
          className={style.termDescription}
        >{`${house.address}, ${house.city} (${house.country})`}</dd>
      </div>
      <div className={style.groupRow}>
        <dt className={style.termTitle}>Habitaciones:</dt>
        <dd className={style.termDescription}>{house.bedrooms}</dd>
      </div>
      <div className={style.groupRow}>
        <dt className={style.termTitle}>Camas:</dt>
        <dd className={style.termDescription}>{house.beds}</dd>
      </div>
      <div className={style.groupRow}>
        <dt className={style.termTitle}>Baños:</dt>
        <dd className={style.termDescription}>{house.bathrooms}</dd>
      </div>
    </div>
  );
};
