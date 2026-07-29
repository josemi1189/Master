<style lang="scss" src="./HouseDetail.scss" scoped />

<script setup lang="ts">
import type { HouseDetails } from "~/types/houseDetails";
import ShowRating from "~/components/ShowRating.vue";
import Details from "./components/Details.vue";
import CheckReserve from "./components/CheckReserve.vue";

const props = defineProps<{
  id: number;
}>();

const { data: house } = await useFetch<HouseDetails>(
  `/api/houseDetail/${props.id}`,
);
</script>
<template>
  <article class="container" v-if="house">
    <header class="head">
      <h1 class="houseName" tabIndex="{-1}">{{ house.name }}</h1>
      <CheckReserve :house-id="house.id" />
      <span>{{ house.price }} € / noche</span>
    </header>
    <section class="content">
      <NuxtImg :src="house.image" :alt="house.name" width="410" height="320" />

      <Details :house="house" />
    </section>
    <section class="amenities">
      <span v-for="label in house.amenities" :key="label" class="label">
        {{ label }}
      </span>
    </section>
    <footer class="reviews">
      <div :key="review.id" class="review" v-for="review in house.reviews">
        <div class="head">
          <span>{{ review.author }}</span>
          <ShowRating :rating="review.rating" />
        </div>
        <span>{{ review.date }}</span>
        <span>{{ review.comment }}</span>
      </div>
    </footer>
  </article>
</template>
