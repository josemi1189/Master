import { StarFillIcon, StarIcon } from "@/components/icons";

interface Props {
  rating: number;
}
export const ShowRating: React.FC<Props> = ({ rating }) => {
  return (
    <div role="img" aria-label={`Calificación de ${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (v, i) =>
        i < rating ? <StarFillIcon key={i} /> : <StarIcon key={i} />,
      )}
    </div>
  );
};
