import { createServerOnlyFn } from "@tanstack/react-start";

// https://tanstack.com/start/latest/docs/framework/react/guide/environment-variables#example-setup
export const getPrivateEnv = createServerOnlyFn(() => ({
  BASE_API_URL: process.env.BASE_API_URL,
}));
