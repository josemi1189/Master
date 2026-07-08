import { createEmptyHouseDetailToVM, House } from "./house.vm";
import { House as HouseApi } from "./api/house.model";

export const mapHouseDetailToVm = (apiData: HouseApi): House => {
  return Boolean(apiData)
    ? {
        id: apiData.id,
        name: apiData.name,
        description: apiData.description,
        address: apiData.address,
        city: apiData.city,
        country: apiData.country,
        bedrooms: apiData.bedrooms,
        beds: apiData.beds,
        bathrooms: apiData.bathrooms,
        price: apiData.price,
        image: apiData.image,
        amenities: apiData.amenities,
        reviews: apiData.reviews,
      }
    : createEmptyHouseDetailToVM();
};
