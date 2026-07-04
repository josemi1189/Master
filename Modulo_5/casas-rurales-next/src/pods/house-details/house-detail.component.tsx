import { House } from "./house.vm";
import style from "./house-detail.module.scss";
import Image from "next/image";
import { ENV } from "@/core/constants";
import { Details, CheckReserve } from "./components";
import { ShowRating } from "@/components/show-rating";

interface Props {
  house: House;
}
export const HouseDetail: React.FC<Props> = ({ house }) => {
  return (
    <article className={style.container}>
      <header className={style.head}>
        <h1 className={style.houseName} tabIndex={-1}>
          {house.name}
        </h1>
        <CheckReserve houseID={house.id} />
        <span>{`${house.price} € / noche`}</span>
      </header>
      <section className={style.content}>
        {house.image !== "" && (
          <Image
            src={`${ENV.BASE_PICTURES_URL}${house.image}`}
            alt={house.name}
            width={410}
            height={320}
            style={{ width: "auto", height: "auto" }}
          />
        )}
        <Details house={house} />
      </section>
      <section className={style.amenities}>
        {house.amenities.map((label) => (
          <span key={label} className={style.label}>
            {label}
          </span>
        ))}
      </section>
      <footer className={style.reviews}>
        {house.reviews.map((review) => (
          <div key={review.id} className={style.review}>
            <div className={style.head}>
              <span>{review.author}</span>
              <ShowRating rating={review.rating} />
            </div>
            <span>{review.date}</span>
            <span>{review.comment}</span>
          </div>
        ))}
      </footer>
    </article>
  );
};
