import { mapHouseListToVM } from "./houseList.mapped";
import type * as API from "../../app/types/house.modelAPI";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const data = await $fetch<API.House[]>(`${config.baseApiUrl}/houses`);
  return mapHouseListToVM(data, config.basePicturesUrl);
});
