<style lang="scss" src="./HouseList.scss" scoped></style>
<script setup lang="ts">
import Card from "./components/Card.vue";
import type { House } from "@/types/house.ts";
import HouseSearch from "~/components/HouseSearch.vue";
import { useSearch } from "~/composable/search.ts";

const { textSearch, updateSearch } = useSearch();

const props = defineProps<{
  houses: House[];
  pending: boolean;
  error?: string;
}>();

const listFiltered = computed(() =>
  props.houses.filter(
    (house) =>
      house.name.toLowerCase().includes(String(textSearch.value)) ||
      house.city.toLowerCase().includes(String(textSearch.value)),
  ),
);
</script>

<template>
  <div class="container">
    <div class="search">
      <HouseSearch :filter="textSearch" :setFilter="updateSearch" />
    </div>
    <section class="content">
      <p v-if="pending" class="error">Cargando casas rurales...</p>
      <p v-if="error" class="error">¡Ups! Ha ocurrido algún error...</p>
      <p
        v-if="!houses || (listFiltered && listFiltered.length === 0)"
        class="error"
      >
        No encontramos lo que buscas
      </p>
      <Card
        v-else
        v-for="house in listFiltered"
        :key="house.id"
        :house="house"
      />
    </section>
  </div>
</template>
