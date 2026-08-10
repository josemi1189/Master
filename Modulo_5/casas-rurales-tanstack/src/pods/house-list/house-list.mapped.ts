import { createEmptyHouseListToVM, type House } from "./house.vm";
import type * as apiModel from "./api/house.api";
import { ENV } from "#constants";

export const mapHouseListToVM = (houseList: apiModel.House[]): House[] => {
  return Boolean(houseList)
    ? houseList.map((house) => ({
        id: house.id,
        name: house.name,
        description: house.description,
        address: house.address,
        city: house.city,
        price: house.price,
        image: `${ENV.VITE_BASE_PICTURES_URL}${house.image}`,
        bedrooms: house.bedrooms,
        beds: house.beds,
        bathrooms: house.bathrooms,
        rating:
          house.reviews.reduce((total, review) => review.rating + total, 0) /
          house.reviews.length,
        totalReviews: house.reviews.length,
      }))
    : createEmptyHouseListToVM();
};
