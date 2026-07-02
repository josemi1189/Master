import { House } from "./house.vm";
import { House as HouseApi } from "./api/house.model";

export const mapHouseDetailToVm = (details: HouseApi): House => ({
  id: details.id,
  name: details.name,
  description: details.description,
  address: details.address,
  city: details.city,
  country: details.country,
  bedrooms: details.bedrooms,
  beds: details.beds,
  bathrooms: details.bathrooms,
  price: details.price,
  image: details.image,
  amenities: details.amenities,
  reviews: details.reviews,
});
