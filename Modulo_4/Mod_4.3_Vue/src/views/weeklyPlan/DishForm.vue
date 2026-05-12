<template>
  <div class="fixed inset-0 flex items-center justify-center p-4">
    <div
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
      aria-hidden="true"
    ></div>

    <div
      class="w-96 p-2 flex flex-col shadow-xl rounded-lg justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-bgLight"
    >
      <div class="flex flex-row w-full justify-between">
        <div v-if="dishesStore.modalOption === 'modify'">
          <button @click="handleFavorites">Favorito</button>
        </div>
        <div
          class="p-1 hover:text-dark-primaryColor text-dark-accent transition-colors flex self-end"
          @click="dishesStore.closeModalState"
        >
          <CloseIcon />
        </div>
      </div>
      <div class="flex flex-col gap-5 p-4">
        <div
          v-if="dishesStore.modalOption === 'add'"
          class="text-center text-3xl text-dark-primaryColor font-bold"
        >
          Nuevo plato
        </div>

        <div>
          <label for="dish" class="block font-medium py-1"
            >Nombre del plato</label
          >
          <input
            id="dish"
            name="dish"
            type="text"
            v-model="dish"
            placeholder="Nombre del plato"
            maxlength="30"
            class="block w-full min-w-0 grow bg-dark-bg py-1.5 pr-3 pl-1 text-base text-dark-text outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md"
            required
          />
        </div>

        <div class="w-56">
          <label for="day" class="block font-medium py-1"
            >Día de la semana</label
          >
          <select
            id="day"
            name="day"
            v-model="dayWeek"
            @input="handleDay"
            class="block w-full min-w-0 bg-dark-bg grow py-2 pr-3 pl-1 text-base text-dark-text outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md"
          >
            <option value="" disabled>Selecciona un día:</option>
            <option value="1">LUNES</option>
            <option value="2">MARTES</option>
            <option value="3">MIÉRCOLES</option>
            <option value="4">JUEVES</option>
            <option value="5">VIERNES</option>
            <option value="6">SÁBADO</option>
            <option value="7">DOMINGO</option>
          </select>
        </div>
        <div class="w-56">
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              id="lunch"
              name="mealTime"
              value="lunch"
              v-model="mealTime"
            />
            <label for="lunch">Almuerzo</label>
          </div>
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              id="dinner"
              name="mealTime"
              value="dinner"
              v-model="mealTime"
            />
            <label for="dinner">Cena</label>
          </div>
        </div>
        <div class="w-56" v-if="dishesStore.modalOption === 'add'">
          <button
            @click="handleSubmitForm"
            class="block min-w-0 grow py-2 px-3 text-lg font-bold bg-dark-accent disabled:bg-dark-bg disabled:text-gray-400 disabled:hover:bg-dark-bg outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md hover:bg-dark-primaryColor hover:text-dark-bgLight"
            :disabled="isDisabled"
          >
            Añadir plato
          </button>
        </div>
        <div v-else class="flex flex-row gap-1">
          <button
            @click="handleUpdateForm"
            class="block min-w-0 grow py-2 px-3 text-lg font-bold bg-dark-accent disabled:bg-dark-bg disabled:text-gray-400 disabled:hover:bg-dark-bg outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md hover:bg-fuchsia-800 hover:text-dark-bgLight"
          >
            Actualizar
          </button>
          <button
            @click="handleDeleteForm"
            class="block min-w-0 grow py-2 px-3 text-lg font-bold outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md bg-red-800 hover:bg-red-700 text-dark-bgLight"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/assets/icons/CloseIcon.vue";
import { useDishesStore } from "@/stores/DishesStore";
import type { MealType } from "@/types/meals";
import { computed, ref, watch } from "vue";

const dishId = ref<string | null>("");
const dish = ref<string>("");
const dayWeek = ref<string>("");
const mealTime = ref<MealType>("lunch");

defineProps<{
  id?: string;
  name?: string;
  day?: string;
  mealType?: MealType;
}>();

const dishesStore = useDishesStore();

/******************** TODO: REVISAR ESTO ********************/
watch(
  () => dishesStore.modalOption,
  (newOption) => {
    if (newOption === "modify" && dishesStore.modalData) {
      dishId.value = dishesStore.modalData.dishId;
      dish.value = dishesStore.modalData.name;
      dayWeek.value = dishesStore.modalData.dayId;
      mealTime.value = dishesStore.modalData.mealType;
    } else {
      dish.value = "";
      dayWeek.value = "";
      mealTime.value = "lunch";
    }
  },
  { immediate: true },
);

const isDisabled = computed(() => {
  return dish.value.trim() === "" || dayWeek.value === "";
});

const handleDay = (event: Event) => {
  selected: (event.target as HTMLInputElement).value;
};

const handleSubmitForm = () => {
  if (dish.value.trim() !== "" && dayWeek.value !== "") {
    dishesStore.addDish(dayWeek.value, mealTime.value, dish.value);
    dishesStore.closeModalState();
  }
};

const handleUpdateForm = () => {
  dishesStore.updateDish(
    {
      dishId: dishesStore.modalData!.dishId,
      dayId: dishesStore.modalData!.dayId,
      mealType: dishesStore.modalData!.mealType,
      name: dishesStore.modalData!.name,
    },
    {
      dishId: dishesStore.modalData!.dishId,
      dayId: dayWeek.value,
      mealType: mealTime.value,
      name: dish.value,
    },
  );
  dishesStore.closeModalState();
};
const handleDeleteForm = () => {
  if (dishId.value)
    dishesStore.deleteDish(
      dishesStore!.modalData!.dayId,
      dishesStore!.modalData!.mealType,
      dishId.value,
    );

  dishesStore.closeModalState();
};
const handleFavorites = () => {
  console.log("favorite");
};
</script>
