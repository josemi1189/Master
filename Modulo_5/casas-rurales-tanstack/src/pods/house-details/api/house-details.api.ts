import { getPrivateEnv } from "#constants/env.server";
import { createServerFn } from "@tanstack/react-start";
import { mapHouseDetailToVm } from "../house-detail.mapped";

export const getHouseDetailsById = createServerFn()
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const baseUrl = `${getPrivateEnv().BASE_API_URL}`;
    return await fetch(`${baseUrl}/houses/${data.id}`)
      .then((result) => result.json())
      .then(mapHouseDetailToVm);
  });
