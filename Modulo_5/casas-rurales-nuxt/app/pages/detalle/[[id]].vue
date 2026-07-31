<script setup lang="ts">
import Error from "~/error.vue";
import HouseDetailPod from "~/pods/HouseDetail/HouseDetailPod.vue";
import type { HouseDetails } from "~/types/houseDetails";

definePageMeta({
  layout: "details",
  layoutTransition: { duration: { enter: 50, leave: 50 }, mode: "in-out" },
});

const route = useRoute();

useSeoMeta({
  title: "Casas rurales - Nuxt",
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
});
if (!route.params.id) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página no encontrada",
    fatal: true,
  });
}
const { data: house } = await useFetch<HouseDetails>(
  `/api/houseDetail/${route.params.id}`,
);
if (!house.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Esta casa no se encuentra en nuestro catálogo",
    fatal: true, // ¡Importante! 'fatal: true' fuerza a Nuxt a renderizar el error.vue
  });
}
</script>

<template>
  <HouseDetailPod :house="house" v-if="house" />
  <Error v-else />
</template>
