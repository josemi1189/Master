import { ENV } from "@/core/constants";
import { createEmptyHouseListToVM, House } from "./house.vm";
import * as apiModel from "./api";
export const mapHouseListToVM = (houseList: apiModel.House[]): House[] => {
  return Boolean(houseList)
    ? houseList.map((house) => ({
        id: house.id,
        name: house.name,
        description: house.description,
        address: house.address,
        city: house.city,
        price: house.price,
        image: `${ENV.BASE_PICTURES_URL}${house.image}`,
      }))
    : createEmptyHouseListToVM();
};
