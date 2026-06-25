import { House } from "./house.vm";
import { House as HouseApi } from "./api";
import { ENV } from "@/core/constants";
export const mapHouseListToVM = (houseList: HouseApi[]): House[] => {
  return houseList.map((house) => ({
    id: house.id,
    name: house.name,
    description: house.description,
    address: house.address,
    city: house.city,
    country: house.country,
    bedrooms: house.bedrooms,
    beds: house.beds,
    bathrooms: house.bathrooms,
    price: house.price,
    image: `${ENV.BASE_PICTURES_URL}${house.image}`,
    amenities: house.amenities.map((item) => item),
    reviews: house.reviews.map((item) => item),
  }));
};
