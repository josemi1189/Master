import { getPrivateEnv } from "#constants/env.server.js";
import { createServerFn } from "@tanstack/react-start";

export const getHouseList = createServerFn().handler(async () => {
  const baseUrl = getPrivateEnv().BASE_API_URL;
  const response = await fetch(`${baseUrl}/houses`, {});

  if (!response.ok) {
    throw new Error(`Error ${response.status} al cargar casas`);
  }

  return response.json();
});
