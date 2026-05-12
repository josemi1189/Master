<template>
  <DishForm v-if="disheshStore.modalState" />
  <div class="max-w-5xl flex flex-col justify-self-center">
    <div class="flex justify-end px-3 py-5" aria-label="Añadir nuevo plato">
      <button
        @click="disheshStore.openModalState('add')"
        class="hover:text-dark-primaryColor text-dark-accent transition-colors"
        title="Añadir nuevo plato"
        aria-label="Añadir nuevo plato"
      >
        <AddIcon />
      </button>
    </div>
    <div class="flex flex-row flex-wrap w-full gap-7 py-6 justify-evenly">
      <div
        class="border shadow-md rounded-lg bg-dark-bgLight max-w-80 sm:w-80 p-3 w-full"
        v-for="day of disheshStore.weekly"
        :key="day.id"
      >
        <div
          class="font-bold text-xl text-center pb-1.5 border-b text-dark-accent"
        >
          {{ day.day }}
        </div>
        <MealTypeComponent
          :day-id="day.id"
          :meals="day.lunch"
          mealType="lunch"
        />
        <MealTypeComponent
          :day-id="day.id"
          :meals="day.dinner"
          mealType="dinner"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import MealTypeComponent from "./MealTypeComponent.vue";
import AddIcon from "@/assets/icons/AddIcon.vue";
import DishForm from "./DishForm.vue";

const disheshStore = useDishesStore();
</script>
