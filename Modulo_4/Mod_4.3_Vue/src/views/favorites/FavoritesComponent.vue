<template>
  <div
    class="w-full max-w-5xl mx-auto flex flex-col gap-5"
    v-if="favoriteDishes.length !== 0"
  >
    <h1
      class="text-center font-bold text-3xl py-10 px-2 text-dark-primaryColor"
    >
      Platos marcados como favoritos
    </h1>
    <div class="flex flex-row flex-wrap gap-4 p-4">
      <div
        v-for="(dish, index) of favoriteDishes"
        :key="index"
        class="shadow-gray-800 border-2 p-3 w-fit font-semibold text-dark-primaryColor bg-green-100 rounded-lg cursor-pointer hover:bg-green-200"
        @click="handleFavorite(dish.id, dish.name)"
      >
        {{ dish.name }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="p-5 w-full text-3xl text-dark-text font-bold text-center flex justify-center items-center h-48"
  >
    No existen platos marcados como favoritos
  </div>
  <DishFormModal v-if="dishesStore.modalState" :name="nameDish" :id="id" />
</template>
<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import { computed, ref } from "vue";
import { DishFormModal } from "@/views/weeklyPlan";

const dishesStore = useDishesStore();
const nameDish = ref<string>("");
const id = ref<string>("");

const favoriteDishes = computed(() =>
  dishesStore.dishes.filter((d) => d.favorite),
);

const handleFavorite = (dishId: string, dishName: string) => {
  dishesStore.modalState = true;
  dishesStore.openModalDishes("updateFavorites", dishId);
  id.value = dishId;
  nameDish.value = dishName;
};
</script>
