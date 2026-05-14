<template>
  <div class="fixed inset-0 flex items-center justify-center p-4">
    <div
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
      aria-hidden="true"
    ></div>

    <div
      class="w-96 p-4 flex flex-col shadow-xl rounded-lg justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-bgLight"
    >
      <div class="flex flex-row w-full justify-between">
        <div
          class="p-1 hover:text-dark-primaryColor text-dark-accent transition-colors flex self-end"
          @click="dishesStore.closeModalDishes"
          aria-label="Cierra modal"
        >
          <CloseIcon />
        </div>
        <div v-if="dishesStore.modalOption === 'modify'">
          <button @click="handleFavorites(!favorite)">
            <span v-if="favorite"
              ><FavoriteFillIcon class="text-red-700 text-3xl"
            /></span>
            <span v-else
              ><FavoriteEmptyIcon class="text-red-700 text-3xl"
            /></span>
          </button>
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
            class="block w-full min-w-0 grow bg-dark-bg py-1.5 pr-3 pl-2 text-base text-dark-text outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md"
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
            class="block w-full min-w-0 bg-dark-bg grow py-2 pr-3 pl-1 text-base text-dark-text outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md"
          >
            <option value="" disabled>Selecciona un día:</option>
            <option
              v-for="(day, index) in DAYS"
              :key="day"
              :value="(index + 1).toString()"
            >
              {{ day }}
            </option>
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
            @click="handleAddDish"
            class="block min-w-0 grow py-2 px-3 text-lg font-bold bg-dark-accent disabled:bg-dark-bg disabled:text-gray-400 disabled:hover:bg-dark-bg outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md hover:bg-dark-primaryColor hover:text-dark-bgLight"
            :disabled="isDisabled"
          >
            Añadir plato
          </button>
        </div>
        <div v-else class="flex flex-row gap-1">
          <button
            @click="handleUpdateDish"
            class="block min-w-0 grow py-2 px-3 text-lg font-bold bg-dark-accent disabled:bg-dark-bg disabled:text-gray-400 disabled:hover:bg-dark-bg outline-1 outline outline-gray-400 sm:text-sm/6 rounded-md hover:bg-fuchsia-800 hover:text-dark-bgLight"
          >
            Actualizar
          </button>
          <button
            @click="handleDeleteDish"
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
import { FavoriteEmptyIcon, FavoriteFillIcon, CloseIcon } from "@/assets/icons";
import { useDishesStore } from "@/stores/DishesStore";
import { DAYS, type MealType, type ModalData } from "@/types/meals";
import { computed, ref, watch } from "vue";

const dishId = ref<string | null>("");
const dish = ref<string>("");
const dayWeek = ref<string>("");
const mealTime = ref<MealType>("lunch");
const favorite = ref<boolean>(false);
const oldData = ref<ModalData>();
const props = defineProps<{
  name?: string;
  id?: string;
}>();

const dishesStore = useDishesStore();

/******************** TODO: REVISAR ESTO ********************/
watch(
  () => dishesStore.modalOption,
  (newOption) => {
    if (newOption === "modify" && dishesStore.modalData) {
      const data = dishesStore.modalData;
      oldData.value = dishesStore.modalData;
      dishId.value = data.dishId;
      dish.value = data.name;
      dayWeek.value = data.dayId;
      mealTime.value = data.mealType;
      favorite.value = dishesStore.getIsFavorite(data.name);
    } else {
      dish.value = props.name || "";
      dayWeek.value = "";
      mealTime.value = "lunch";
    }
  },
  { immediate: true },
);

const isDisabled = computed(() => {
  return dish.value.trim() === "" || dayWeek.value === "";
});

const handleAddDish = () => {
  if (dish.value.trim() !== "" && dayWeek.value !== "") {
    dishesStore.addDish(dayWeek.value, mealTime.value, dish.value);
    dishesStore.closeModalDishes();
  }
};

const handleUpdateDish = () => {
  const newData: ModalData = {
    dishId: dishesStore.modalData!.dishId,
    dayId: dayWeek.value,
    mealType: mealTime.value,
    name: dish.value,
    favorite: favorite.value,
  };

  dishesStore.updateDish(oldData.value!, newData);
  dishesStore.closeModalDishes();
};
const handleDeleteDish = () => {
  if (dishesStore.modalData) {
    dishesStore.deleteDish(
      dishesStore.modalData.dayId,
      dishesStore.modalData.mealType,
      dishesStore.modalData.dishId,
    );
  }
  dishesStore.closeModalDishes();
};
const handleFavorites = (newFavoriteState: boolean) => {
  favorite.value = newFavoriteState;
};
</script>
