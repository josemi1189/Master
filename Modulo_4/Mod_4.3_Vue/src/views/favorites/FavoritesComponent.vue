<template>
  <div class="max-w-56 flex flex-row flex-wrap gap-2 p-3">
    <div
      v-for="dish of favoritesDishes"
      :key="dish.id"
      class="shadow-gray-700 border-2 p-3"
      @click="handleDeleteFavorite(dish.id)"
    >
      {{ dish.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import { computed } from "vue";

const dishesStore = useDishesStore();
const favoritesDishes = computed(() =>
  dishesStore.weekly.flatMap((day) =>
    [...day.dinner, ...day.lunch].filter((dish) => dish.favorite),
  ),
);

const handleDeleteFavorite = (dishId: string) => {
  console.log(dishId);
};
</script>
