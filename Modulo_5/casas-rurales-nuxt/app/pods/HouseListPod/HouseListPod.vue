<script setup lang="ts">
import Card from "./Card.vue";
import type { House } from "@/types/house.ts";

/*
  const { search, setSearch, filterDebounce } = useDebouncedSearch();
  const filteredHouses = useMemo(
    () =>
      houses.filter(
        (house) =>
          house.name.toLowerCase().includes(filterDebounce) ||
          house.city.toLowerCase().includes(filterDebounce),
      ),
    [houses, filterDebounce],
  );*/

const {
  data: houseList,
  pending,
  error,
} = await useFetch<House[]>("/api/houses");
</script>
<style lang="scss" src="./HouseList.scss" scoped></style>
<template>
  <div class="container">
    <h1 class="title" v-if="!pending && !error">Encuentra tu casa rural</h1>
    <!--<HouseSearch search="search" setSearch="setSearch" />-->
  </div>
  <section v-if="pending" class="content">Cargando casas rurales...</section>

  <!-- Estado sin datos o error -->
  <p v-else-if="error || !houseList || houseList.length === 0" class="notFound">
    Sin datos disponibles
  </p>
  <section class="content" v-else>
    <Card v-for="house in houseList" :key="house.id" :house="house" />
  </section>
  <!--<section class="style.content">
    {filteredHouses.length ? ( filteredHouses.map((house) =>
    <Card key="{house.id}" house="{house}" />) ) : (
    <p class="style.notFound}">Sin resultados de búsqueda</p>
    )}
  </section>-->
</template>
