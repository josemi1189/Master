import { ENV } from "@/core/constants";
import { House } from "./house.model";

export const getHouseList = async (): Promise<House[]> => {
  const url = `${ENV.BASE_API_URL}/houses`;
  return await fetch(url).then((response) => response.json());
};
