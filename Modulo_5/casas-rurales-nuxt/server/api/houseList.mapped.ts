import type * as API from "../../app/types/house.modelAPI";
import type { House } from "@/types/house";
import { createEmptyHouseListToVM } from "@/utils/house.empty";

export const mapHouseListToVM = (
  houseList: API.House[],
  basePicturesUrl: string,
): House[] => {
  const data: House[] = houseList.map((house) => ({
    id: String(house.id),
    name: house.name,
    description: house.description,
    address: house.address,
    city: house.city,
    price: house.price,
    image: `${basePicturesUrl ?? ""}${house.image}`,
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms,
    rating:
      house.reviews && house.reviews.length > 0
        ? house.reviews.reduce((total, review) => total + review.rating, 0) /
          house.reviews.length
        : 0,
    totalReviews: house.reviews?.length ?? 0,
  }));

  return data.length > 0 ? data : createEmptyHouseListToVM();
};
