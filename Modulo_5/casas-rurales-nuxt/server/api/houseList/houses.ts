import { mapHouseListToVM } from "./houseList.mapped";
import type * as API from "~/types/house.modelAPI";
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const houseList = await $fetch<API.House[]>(`${config.baseApiUrl}/houses`);

  if (!houseList) {
    throw createError({
      statusCode: 404,
      statusMessage: "Houses not found",
    });
  }
  return mapHouseListToVM(houseList, config.basePicturesUrl);
});
