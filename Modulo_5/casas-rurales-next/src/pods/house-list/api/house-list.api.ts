import { ENV } from "@/core/constants";
import * as API from "./house.model";

export const getHouseList = async (): Promise<API.House[]> => {
  const url = `${ENV.BASE_API_URL}/houses`;
  return await fetch(url, { next: { revalidate: 60 } }).then((response) =>
    response.json(),
  );
};
