import { StarFillIcon, StarEmptyIcon, StarHalfIcon } from "@/components/icons";

interface Props {
  rating: number;
  totalReviews?: number;
}
export const ShowRating: React.FC<Props> = ({ rating, totalReviews }) => {
  return (
    <div
      role="img"
      aria-label={`Calificación de ${rating} de 5 estrellas`}
      style={{ display: "flex", justifyContent: "center", fontSize: "1.2em" }}
    >
      {Array.from({ length: 5 }, (v, i) =>
        i < Math.floor(rating) ? (
          <StarFillIcon key={i} />
        ) : i < rating ? (
          <StarHalfIcon key={i} />
        ) : (
          <StarEmptyIcon key={i} />
        ),
      )}
      {totalReviews ? <span>({totalReviews})</span> : ""}
    </div>
  );
};
