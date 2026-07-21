import { mapHouseListToVM } from "./houseList.mapped";
import * as API from "./house.model";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const data = await $fetch<API.House[]>(`${config.baseApiUrl}/houses`);
  return mapHouseListToVM(data, config.basePicturesUrl);
});
