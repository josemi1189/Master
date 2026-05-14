<template>
  <div
    v-if="mealType === 'lunch'"
    class="font-semibold px-3 py-1 border-t-2 text-dark-text"
  >
    Almuerzo
  </div>
  <div v-else class="font-semibold px-3 py-1 border-t-2">Cena</div>
  <div class="text-md flex flex-row flex-wrap gap-1 min-h-16 pb-1.5">
    <div v-if="dishes.length > 0" class="flex flex-row flex-wrap gap-1">
      <div
        v-for="dish of dishes"
        :key="dishesStore.getDishById(dish)?.id"
        class="cursor-pointer p-1.5 h-fit rounded shadow-md border"
        @click="dishSelected(dish)"
      >
        {{ dishesStore.getDishById(dish)?.name }}
      </div>
    </div>
    <div v-else class="text-gray-400">Sin platos</div>
  </div>
</template>
<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import type { MealType } from "@/types/meals";

const dishesStore = useDishesStore();

const props = defineProps<{
  dayId: string;
  dishes: string[];
  mealType: MealType;
}>();

const dishSelected = (dishId: string) => {
  dishesStore.openModalDishes("modify", dishId, props.dayId, props.mealType);
};
</script>
