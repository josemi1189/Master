import { ref } from "vue";
import { defineStore } from "pinia";
import type { WeekPlan, MealType, OptionModal, ModalData } from "@/types/meals";

export const useDishesStore = defineStore("dishesWeekly", () => {
  const modalState = ref(false);
  const modalOption = ref<OptionModal>("add");
  const modalData = ref<ModalData | null>(null);

  const weekly = ref<WeekPlan[]>([
    {
      id: "1",
      day: "Lunes",
      lunch: [
        { id: "1", name: "Pasta a la carbonara", favorite: true },
        { id: "2", name: "Ensalada verde", favorite: true },
      ],
      dinner: [
        { id: "3", name: "Pescado al horno", favorite: false },
        { id: "4", name: "Arroz integral", favorite: false },
      ],
    },
    {
      id: "2",
      day: "Martes",
      lunch: [
        { id: "5", name: "Pollo a la mostaza", favorite: false },
        { id: "6", name: "Patatas cocidas", favorite: false },
      ],
      dinner: [
        { id: "7", name: "Sopa de verduras", favorite: false },
        { id: "8", name: "Pan tostado", favorite: false },
      ],
    },
    {
      id: "3",
      day: "Miércoles",
      lunch: [
        { id: "9", name: "Carne guisada", favorite: false },
        { id: "10", name: "Puré de papas", favorite: false },
      ],
      dinner: [
        { id: "11", name: "Tortilla española", favorite: false },
        { id: "12", name: "Lechuga", favorite: false },
      ],
    },
    {
      id: "4",
      day: "Jueves",
      lunch: [
        { id: "13", name: "Arroz con pollo", favorite: false },
        { id: "14", name: "Tomate fresco", favorite: false },
      ],
      dinner: [
        { id: "15", name: "Merluza a la sal", favorite: false },
        { id: "16", name: "Espárragos", favorite: false },
      ],
    },
    {
      id: "5",
      day: "Viernes",
      lunch: [
        { id: "17", name: "Lentejas estofadas", favorite: false },
        { id: "18", name: "Espinacas", favorite: false },
      ],
      dinner: [
        { id: "19", name: "Albóndigas en salsa", favorite: false },
        { id: "20", name: "Fideos", favorite: false },
      ],
    },
    {
      id: "6",
      day: "Sábado",
      lunch: [
        { id: "21", name: "Pechuga de pavo", favorite: false },
        { id: "22", name: "Batata asada", favorite: false },
      ],
      dinner: [
        { id: "23", name: "Pizza casera", favorite: false },
        { id: "24", name: "Ensalada mixta", favorite: false },
      ],
    },
    {
      id: "7",
      day: "Domingo",
      lunch: [
        { id: "25", name: "Rabo de toro", favorite: false },
        { id: "26", name: "Jamón ibérico", favorite: false },
      ],
      dinner: [
        { id: "27", name: "Caldo de pollo", favorite: false },
        { id: "28", name: "Verduras asadas", favorite: false },
      ],
    },
  ]);

  /** HELPERS **/
  const getDayDataById = (dayId: string): WeekPlan | undefined => {
    return weekly.value.find((d) => d.id === dayId);
  };
  const getPositionIndexById = (
    day: WeekPlan,
    dishId: string,
    mealType: MealType,
  ) => {
    return day?.[mealType].findIndex((d) => d.id === dishId);
  };
  const getRandomID = () =>
    Math.floor(Math.random() * 10000).toString() + Date.now().toString();

  /** MODAL HANDLE STATE **/
  const openModalState = (
    option: OptionModal,
    dishId?: string,
    dayId?: string,
    mealType?: MealType,
  ) => {
    modalState.value = true;
    modalOption.value = option;
    if (option === "modify" && dishId && dayId && mealType) {
      const day = getDayDataById(dayId);
      const dishIndexPosition = getPositionIndexById(day!, dishId, mealType);
      if (day && dishIndexPosition !== -1) {
        const dishName = day[mealType][dishIndexPosition]?.name;
        const favorite = day[mealType][dishIndexPosition]?.favorite || false;

        modalData.value = {
          dishId,
          name: dishName!,
          dayId: dayId,
          mealType,
          favorite: favorite,
        };
      }
    }
  };
  const closeModalState = () => {
    modalState.value = false;
  };

  /** DATABASE MANAGEMENT **/
  const addDish = (
    dayId: string,
    mealType: MealType,
    dishName: string,
    dishId?: string,
    favoriteState?: boolean,
  ) => {
    const dayData = getDayDataById(dayId);
    if (!dayData) return;
    dayData[mealType].push({
      id: dishId || getRandomID(),
      name: dishName,
      favorite: favoriteState || false,
    });
  };
  const deleteDish = (dayId: string, mealType: MealType, dishId: string) => {
    const day = getDayDataById(dayId);
    const dishIndexPosition = getPositionIndexById(day!, dishId, mealType);
    if (dishIndexPosition === undefined || dishIndexPosition === -1) return;
    day?.[mealType].splice(dishIndexPosition, 1);
  };

  const updateDish = (oldData: ModalData, newData: ModalData) => {
    deleteDish(oldData.dayId, oldData.mealType, oldData.dishId);
    addDish(
      newData.dayId,
      newData.mealType,
      newData.name,
      newData.dishId,
      newData.favorite,
    );
  };

  return {
    weekly,
    addDish,
    updateDish,
    deleteDish,
    modalState,
    openModalState,
    closeModalState,
    modalOption,
    modalData,
  };
});
