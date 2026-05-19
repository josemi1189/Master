<template>
  <div class="relative w-full max-w-56">
    <label for="filter" class="hidden">Filtro por nombre</label>
    <input
      id="filter"
      name="filter"
      type="text"
      :value="filter"
      @input="handleInput"
      placeholder="Buscar..."
      class="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 focus:outline-none"
    />
    <button
      type="button"
      class="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      @click="resetFilter"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <SearchIcon />
  </div>
</template>
<script setup lang="ts">
import { SearchIcon } from "@/assets/commons/icons";
/**
 * @param filter: string -> filter search
 */
defineProps<{
  filter: string;
}>();
const emit = defineEmits(["handle-filter"]);

const handleInput = (event: Event) => {
  emit("handle-filter", (event.target as HTMLInputElement).value);
};
const resetFilter = () => {
  emit("handle-filter", "");
};
</script>
