import { ENV } from "@/core/constants";
import { House } from "./house.model";

export const getHouseDetailsById = async (id: string): Promise<House> => {
  const url = `${ENV.BASE_API_URL}/houses/${id}`;
  const result = await fetch(url, { next: { revalidate: 5 } });
  return result.json();
};
