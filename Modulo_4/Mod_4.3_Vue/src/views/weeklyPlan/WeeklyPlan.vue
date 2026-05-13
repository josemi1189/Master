<template>
  <DishForm v-if="disheshStore.modalState" />
  <div class="max-w-5xl flex flex-col justify-self-center">
    <div
      class="flex justify-between px-3 py-5 items-center"
      aria-label="Añadir nuevo plato"
    >
      <select
        id="filter"
        name="filter"
        v-model="filter"
        @input="handleFilter"
        class="block max-w-40 h-9 bg-dark-bg grow pr-3 pl-1 text-dark-text outline-1 outline outline-gray-400 rounded-md"
      >
        <option value="all">Todos</option>
        <option value="lunch">Almuerzo</option>
        <option value="dinner">Cena</option>
      </select>

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
          v-if="filter !== 'dinner'"
          :day-id="day.id"
          :meals="day.lunch"
          mealType="lunch"
        />
        <MealTypeComponent
          v-if="filter !== 'lunch'"
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
import DishForm from "./DishFormModal.vue";
import { ref } from "vue";

const disheshStore = useDishesStore();
const filter = ref<string>("all");

const handleFilter = (event: Event) => {
  filter: (event.target as HTMLInputElement).value;
};
</script>
