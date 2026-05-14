<template>
  <div class="w-full max-w-5xl flex flex-col justify-self-center">
    <div
      class="flex justify-between px-3 py-5 items-center"
      aria-label="Añadir nuevo plato"
    >
      <select
        id="filter"
        name="filter"
        v-model="filter"
        @input="handleFilter"
        class="block max-w-40 h-9 bg-dark-bg grow pr-3 pl-1 outline-1 outline outline-gray-400 rounded-md"
      >
        <option value="all">Todos</option>
        <option value="lunch">Almuerzo</option>
        <option value="dinner">Cena</option>
      </select>
      <button
        @click="openModal()"
        class="block max-w-40 h-9 bg-red-800 text-white px-3 outline-1 outline outline-red-900 rounded-sm"
      >
        Limpiar
      </button>
      <button
        @click="dishesStore.openModalDishes('add')"
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
        v-for="(day, index) of dishesStore.weekly"
        :key="day.id"
      >
        <div class="font-bold text-xl text-center pb-1.5 text-dark-accent">
          {{ DAYS[index] }}
        </div>
        <MealTypeComponent
          v-if="filter !== 'dinner'"
          :day-id="day.id"
          :dishes="day.lunch"
          mealType="lunch"
          :key="`l${day.id}`"
        />
        <MealTypeComponent
          v-if="filter !== 'lunch'"
          :day-id="day.id"
          :dishes="day.dinner"
          mealType="dinner"
          :key="`d${day.id}`"
        />
      </div>
    </div>
  </div>
  <DishFormModal v-if="dishesStore.modalState" />
  <ConfirmModal
    v-if="isModalOpen"
    @close="closeModal"
    @confirm="removeAllDish"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDishesStore } from "@/stores/DishesStore";
import {
  ConfirmModal,
  DishFormModal,
  MealTypeComponent,
} from "@/views/weeklyPlan";
import { AddIcon } from "@/assets/icons";
import { DAYS } from "@/types/meals";

const dishesStore = useDishesStore();
const filter = ref<string>("all");
const isModalOpen = ref<boolean>(false);
const openModal = () => (isModalOpen.value = true);
const closeModal = () => (isModalOpen.value = false);
const removeAllDish = () => {
  dishesStore.removeAll();
  closeModal();
};

const handleFilter = (event: Event) => {
  filter: (event.target as HTMLInputElement).value;
};
</script>
