// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.scss" as *;',
        },
      },
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
      appear: true, // Activa la animación en la carga inicial
    },
  },
  runtimeConfig: {
    baseApiUrl: process.env.BASE_API_URL,
    basePicturesUrl: process.env.BASE_PICTURES_URL,
  },
  routeRules: {
    "/": { isr: 120 },
    "/detalle/**": { isr: 180 },
  },
});
