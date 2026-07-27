<script setup lang="ts">
import HouseDetailPod from "~/pods/HouseDetail/HouseDetailPod.vue";

definePageMeta({
  layout: "details",
});

const route = useRoute();

useSeoMeta({
  title: "Casas rurales - Nuxt",
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
});
</script>

<template>
  <HouseDetailPod :id="Number(route.params.id)" />
</template>
