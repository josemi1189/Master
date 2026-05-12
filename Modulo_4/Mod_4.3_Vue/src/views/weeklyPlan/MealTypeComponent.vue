<template>
  <div v-if="mealType === 'lunch'" class="font-semibold pl-2 py-1">
    Almuerzo
  </div>
  <div v-else class="font-semibold pl-2 border-t-2">Cena</div>
  <div class="text-md flex flex-row flex-wrap gap-1 min-h-20 pb-1.5">
    <div v-if="meals.length > 0" class="flex flex-row flex-wrap gap-1">
      <div
        v-for="dish of meals"
        :key="dish.name"
        class="cursor-pointer p-1.5 h-fit rounded shadow-md border"
        @click="dishSelected(dish.id)"
      >
        {{ dish.name }}
      </div>
    </div>
    <div v-else class="text-gray-400">Sin comidas añadidas</div>
  </div>
</template>
<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import type { Dish, MealType } from "@/types/meals";

const dishesStore = useDishesStore();

const props = defineProps<{
  dayId: string;
  meals: Dish[];
  mealType: MealType;
}>();

const dishSelected = (dishId: string) => {
  dishesStore.openModalState("modify", dishId, props.dayId, props.mealType);
};
</script>
