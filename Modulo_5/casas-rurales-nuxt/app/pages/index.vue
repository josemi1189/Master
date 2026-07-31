<script setup lang="ts">
import type { House } from "@/types/house.ts";
import HouseListPod from "~/pods/HouseListPod/HouseListPod.vue";

useSeoMeta({
  title: `Casas rurales - Nuxt`,
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
});

const {
  data: houseList,
  pending,
  error,
} = await useFetch<House[]>("/api/houseList/houses");
</script>

<template>
  <HouseListPod
    :houses="houseList"
    :pending="pending"
    :error="error?.message"
    v-if="houseList"
  />
</template>
<style lang="scss" scoped>
.error {
  font-size: $fs-3xl;
  font-weight: bold;
  font-family: $ff-title;
  color: $color-700;
}
</style>
