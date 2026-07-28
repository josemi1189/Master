<style lang="scss" src="./HouseList.scss" scoped></style>
<script setup lang="ts">
import Card from "./Card.vue";
import type { House } from "@/types/house.ts";
import HouseSearch from "~/components/HouseSearch.vue";
import { useSearch } from "~/composable/search.ts";

const { textSearch, updateSearch } = useSearch();
const {
  data: houseList,
  pending,
  error,
} = await useFetch<House[]>("/api/houseList/houses");

const listFiltered = computed(() =>
  houseList.value?.filter(
    (house) =>
      house.name.toLowerCase().includes(String(textSearch.value)) ||
      house.city.toLowerCase().includes(String(textSearch.value)),
  ),
);
</script>

<template>
  <div class="container">
    <h1 class="title" v-if="!pending && !error">Encuentra tu casa rural</h1>
    <HouseSearch :filter="textSearch" :setFilter="updateSearch" />
  </div>
  <section v-if="pending" class="content">Cargando casas rurales...</section>

  <!-- Estado sin datos o error -->
  <p
    v-else-if="
      error || !houseList || (listFiltered && listFiltered.length === 0)
    "
    class="notFound"
  >
    No encontramos lo que buscas
  </p>
  <section class="content" v-else>
    <Card v-for="house in listFiltered" :key="house.id" :house="house" />
  </section>
</template>
