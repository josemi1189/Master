import { mapHouseListToVM } from "./house.mapped";
import type * as API from "~/types/house.modelAPI";
export default cachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig(event);
    const rawId = getRouterParam(event, "id");
    const id = Number(rawId);

    if (!rawId || isNaN(id) || !Number.isInteger(id) || id <= 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid house id",
      });
    }

    const houses = await $fetch<API.House>(`${config.baseApiUrl}/houses/${id}`);
    if (!houses) {
      throw createError({
        statusCode: 404,
        statusMessage: "House not found",
      });
    }
    return mapHouseListToVM(houses, config.basePicturesUrl);
  },
  {
    maxAge: 60,
    name: "detalle-casa",
    getKey: (event) => getRouterParam(event, "id") ?? "default",
  },
);
