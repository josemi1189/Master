import { ENV } from "@/core/constants";
import { House } from "../house.vm";
import { mapHouseListToVM } from "../house-list.mapped";

export const getHouseList = async (): Promise<House[]> => {
  const url = `${ENV.BASE_API_URL}/houses`;
  return await fetch(url, { next: { revalidate: 60 } })
    .then((response) => response.json())
    .then(mapHouseListToVM);
};
