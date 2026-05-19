<template>
  <div class="w-full max-w-5xl flex flex-col justify-self-center">
    <div
      class="flex flex-row flex-wrap gap-4 justify-between px-3 py-5 items-center"
      aria-label="Añadir nuevo plato"
    >
      <div class="flex flex-col order-3 sm:order-1">
        <label for="filterType" class="hidden">Filtro por tipo</label>
        <select
          id="filterType"
          name="filterType"
          v-model="filterType"
          @input="handleFilterType"
          class="block max-w-40 h-9 bg-dark-bg grow pr-3 pl-1 outline-1 outline outline-gray-400 rounded-md"
        >
          <option value="all">Menú completo</option>
          <option value="lunch">Almuerzo</option>
          <option value="dinner">Cena</option>
        </select>
      </div>
      <SearchComponent
        class="order-1 sm:order-3"
        :filter="dishesStore.filterText"
        @handle-filter="dishesStore.filterText = $event"
      />
      <button
        @click="openModal()"
        class="order-4 sm:order-2 block max-w-40 h-9 bg-red-800 text-white px-3 outline-1 outline outline-red-900 rounded-sm"
      >
        Limpiar
      </button>
      <div class="order-2 sm:order-4">
        <label for="newDish" class="hidden">Añadir nuevo plato</label>
        <button
          id="newDish"
          @click="dishesStore.openModalDishes('add')"
          class="hover:text-dark-primaryColor text-dark-accent transition-colors"
          title="Añadir nuevo plato"
          aria-label="Añadir nuevo plato"
        >
          <AddIcon />
        </button>
      </div>
    </div>
    <div class="flex flex-row flex-wrap w-full gap-7 py-6 justify-evenly">
      <div
        class="border shadow-md rounded-lg bg-dark-bgLight w-11/12 sm:w-80 p-3"
        v-for="(day, index) of weeklyData"
        :key="day.id"
      >
        <div class="font-bold text-xl text-center pb-1.5 text-dark-accent">
          <span v-if="dishesStore.firstDayIsMonday">{{ DAYS[index] }}</span>
          <span v-else>{{ DAYS_EN[index] }}</span>
        </div>
        <MealTypeComponent
          v-if="filterType !== 'dinner'"
          :day-id="day.id"
          :dishes="day.lunch"
          mealType="lunch"
          :key="`l${day.id}`"
        />
        <MealTypeComponent
          v-if="filterType !== 'lunch'"
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
import { computed, ref } from "vue";
import { useDishesStore } from "@/stores/DishesStore";
import {
  ConfirmModal,
  DishFormModal,
  MealTypeComponent,
} from "@/views/components/weeklyPlan";
import { AddIcon } from "@/assets/commons/icons";
import { DAYS, DAYS_EN } from "@/types/meals";
import SearchComponent from "@/assets/commons/SearchComponent.vue";

const dishesStore = useDishesStore();
const filterType = ref<string>("all");

const isModalOpen = ref<boolean>(false);
const openModal = () => (isModalOpen.value = true);
const closeModal = () => (isModalOpen.value = false);
const removeAllDish = () => {
  dishesStore.removeAll();
  closeModal();
};

const handleFilterType = (event: Event) => {
  filterType: (event.target as HTMLInputElement).value;
};
const weeklyData = computed(() => {
  if (dishesStore.firstDayIsMonday) {
    return dishesStore.weekly;
  } else {
    // Mover el último elemento (domingo) al principio
    const reordered = [...dishesStore.weekly];
    const sunday = reordered.pop();
    if (sunday) {
      reordered.unshift(sunday);
    }
    return reordered;
  }
});
</script>
