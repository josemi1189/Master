import type * as API from "../../../app/types/house.modelAPI";
import type { HouseDetails } from "@/types/houseDetails";
import { createEmptyHouseDetailToVM } from "@/utils/house.empty";

export const mapHouseListToVM = (
  house: API.House,
  basePicturesUrl: string,
): HouseDetails => {
  const data: HouseDetails = {
    id: String(house.id),
    name: house.name,
    description: house.description,
    address: house.address,
    city: house.city,
    country: house.country,
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
    amenities: house.amenities,
    reviews: house.reviews,
  };
  return data ? data : createEmptyHouseDetailToVM();
};
