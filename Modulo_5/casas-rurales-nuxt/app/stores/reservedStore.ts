import { defineStore } from "pinia";
import { ref } from "vue";

export const useReservedStore = defineStore("reserved", () => {
  const listReserve = ref<string[]>([]);

  const getIsReserve = (id: string): boolean => {
    return listReserve.value.includes(id);
  };

  const handleReserves = (id: string) => {
    const index = listReserve.value.indexOf(id);
    if (index !== -1) {
      // Existe
      listReserve.value.splice(index, 1);
    } else {
      // No existe
      listReserve.value.push(id);
    }
  };
  return { getIsReserve, handleReserves };
});
