<script setup lang="ts">
import { useDishesStore } from "@/stores/DishesStore";
import HeaderComponent from "@/views/components/HeaderComponent.vue";
import { computed } from "vue";

const dishesStore = useDishesStore();
const firstDayIsMonday = computed(() => {
  if (dishesStore.firstDayIsMonday) {
    return "Lunes";
  } else {
    return "Domingo";
  }
});

const handleFirstDay = (option: boolean) => {
  dishesStore.firstDayIsMonday = option;
};
</script>

<template>
  <HeaderComponent />
  <div class="w-full max-w-4xl flex flex-col justify-self-center py-8">
    <div class="flex flex-row gap-3">
      <div class="text-lg content-center">Primer día de la semana:</div>

      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          @click="handleFirstDay(true)"
          :class="
            firstDayIsMonday === 'Lunes'
              ? 'bg-blue-600  border-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 border-gray-400'
          "
          class="px-5 py-2 text-sm font-medium text-white border rounded-l-lg"
        >
          Lunes
        </button>

        <button
          type="button"
          @click="handleFirstDay(false)"
          :class="
            firstDayIsMonday === 'Domingo'
              ? 'bg-blue-600  border-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 border-gray-400'
          "
          class="px-5 py-2 text-sm font-medium text-white border rounded-r-lg"
        >
          Domingo
        </button>
      </div>
    </div>
  </div>
</template>
