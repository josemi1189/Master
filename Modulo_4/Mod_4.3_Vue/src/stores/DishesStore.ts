import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type {
  DayPlan,
  MealType,
  OptionModal,
  ModalData,
  Dish,
} from "@/types/meals";

export const useDishesStore = defineStore("dishesWeekly", () => {
  const modalState = ref(false);
  const modalOption = ref<OptionModal>("add");
  const modalData = ref<ModalData | null>(null);

  const dishes = reactive<Dish[]>([
    {
      id: "81481778774892259",
      name: "Lentejas",
      favorite: true,
    },
    {
      id: "41711778774903040",
      name: "Ensalada de tomate",
      favorite: false,
    },
    {
      id: "21781778774932784",
      name: "Tortilla con espinacas",
      favorite: false,
    },
    {
      id: "31791778774941264",
      name: "Yogurt",
      favorite: false,
    },
    {
      id: "46941778774955040",
      name: "Arroz con pollo y verduras",
      favorite: false,
    },
    {
      id: "51361778774965447",
      name: "Ensalada verde",
      favorite: false,
    },
    {
      id: "74511778774978559",
      name: "Crema de calabacín",
      favorite: false,
    },
    {
      id: "21611778774989215",
      name: "Queso fresco y pavo",
      favorite: false,
    },
    {
      id: "57141778775004134",
      name: "Pasta carbonara",
      favorite: true,
    },
    {
      id: "60321778775019815",
      name: "Tomate picado",
      favorite: false,
    },
    {
      id: "94401778775042854",
      name: "Merluza al horno",
      favorite: false,
    },
    {
      id: "48031778775074061",
      name: "Pollo a la plancha",
      favorite: false,
    },
    {
      id: "69281778775092853",
      name: "Verduras a la plancha",
      favorite: false,
    },
    {
      id: "75261778775274369",
      name: "Ensalada completa",
      favorite: false,
    },
    {
      id: "24991778775291808",
      name: "Albóndigas",
      favorite: false,
    },
    {
      id: "55701778775299049",
      name: "Verduras salteadas",
      favorite: false,
    },
    {
      id: "41701778775321615",
      name: "Pizza casera",
      favorite: false,
    },
    {
      id: "46241778775336072",
      name: "Paella",
      favorite: false,
    },
    {
      id: "24381778775344857",
      name: "Ensalada",
      favorite: false,
    },
    {
      id: "76401778775359254",
      name: "Revuelto de espárragos",
      favorite: false,
    },
    {
      id: "46311778775381503",
      name: "Pollo al horno",
      favorite: false,
    },
    {
      id: "13051778775404158",
      name: "Sopa",
      favorite: false,
    },
    {
      id: "57601778775425110",
      name: "Sándwich vegetal",
      favorite: false,
    },
  ]);
  const weekly = ref<DayPlan[]>([
    {
      id: "1",
      day: "Lunes",
      lunch: ["81481778774892259", "41711778774903040"],
      dinner: ["21781778774932784", "31791778774941264"],
    },
    {
      id: "2",
      day: "Martes",
      lunch: ["46941778774955040", "51361778774965447"],
      dinner: ["74511778774978559", "21611778774989215"],
    },
    {
      id: "3",
      day: "Miércoles",
      lunch: ["57141778775004134", "60321778775019815"],
      dinner: ["94401778775042854"],
    },
    {
      id: "4",
      day: "Jueves",
      lunch: ["48031778775074061", "69281778775092853"],
      dinner: ["75261778775274369"],
    },
    {
      id: "5",
      day: "Viernes",
      lunch: ["24991778775291808", "55701778775299049"],
      dinner: ["41701778775321615"],
    },
    {
      id: "6",
      day: "Sábado",
      lunch: ["46241778775336072", "24381778775344857"],
      dinner: ["76401778775359254", "31791778774941264"],
    },
    {
      id: "7",
      day: "Domingo",
      lunch: ["46311778775381503", "24381778775344857"],
      dinner: ["13051778775404158", "57601778775425110"],
    },
  ]);
  const createEmptyWeekly = (): DayPlan[] => [
    {
      id: "1",
      day: "Lunes",
      lunch: [],
      dinner: [],
    },
    {
      id: "2",
      day: "Martes",
      lunch: [],
      dinner: [],
    },
    {
      id: "3",
      day: "Miércoles",
      lunch: [],
      dinner: [],
    },
    {
      id: "4",
      day: "Jueves",
      lunch: [],
      dinner: [],
    },
    {
      id: "5",
      day: "Viernes",
      lunch: [],
      dinner: [],
    },
    {
      id: "6",
      day: "Sábado",
      lunch: [],
      dinner: [],
    },
    {
      id: "7",
      day: "Domingo",
      lunch: [],
      dinner: [],
    },
  ];
  const createEmptyDishes = (): Dish[] => [];

  /** HELPERS **/
  const getDayDataById = (dayId: string): DayPlan | undefined => {
    return weekly.value.find((d) => d.id === dayId);
  };
  const getIsFavorite = (name: string) =>
    dishes.some((dish) => dish.name === name && dish.favorite);
  const getDishById = (id: string) => dishes.find((d) => d.id === id);
  const getDishByName = (name: string) =>
    dishes.findIndex((d) => d.name === name);

  const getPositionIndexById = (
    day: DayPlan,
    dishId: string,
    mealType: MealType,
  ) => {
    return day?.[mealType].findIndex((d) => d === dishId);
  };
  const getRandomID = () =>
    Math.floor(Math.random() * 10000).toString() + Date.now().toString();

  /** MODAL HANDLE STATE **/
  const openModalDishes = (
    option: OptionModal,
    dishId?: string,
    dayId?: string,
    mealType?: MealType,
  ) => {
    modalState.value = true;
    modalOption.value = option;

    let dish: Dish | null = null;
    if (dishId) {
      dish = getDishById(dishId) || null;
    }
    if (option === "modify" && dishId && dayId && mealType) {
      modalData.value = {
        dishId,
        name: dish?.name || "",
        dayId: dayId,
        mealType,
        favorite: dish?.favorite || false,
      };
    } else if (option === "add" && dishId) {
      modalData.value = {
        dishId: dish?.id || "",
        name: dish?.name || "",
        dayId: "",
        mealType: "dinner",
        favorite: dish?.favorite || false,
      };
    }
  };
  const closeModalDishes = () => {
    modalState.value = false;
  };

  /** DATABASE MANAGEMENT **/
  const addDish = (
    dayId: string,
    mealType: MealType,
    dishName: string,
    dishId?: string,
  ) => {
    const existingDishIndex = getDishByName(dishName);
    console.log(
      "dayId: ",
      dayId,
      "\nmealType: ",
      mealType,
      "\ndishName: ",
      dishName,
      "\nexistingDishIndex: ",
      existingDishIndex,
    );
    let dishIdToAdd: string = "";
    // Si no existe el plato, se crea uno nuevo y se obtiene su ID
    if (existingDishIndex === -1) {
      dishIdToAdd = dishId || getRandomID();
      dishes.push({
        id: dishIdToAdd,
        name: dishName,
        favorite: false,
      });
    } else {
      // El plato ya existe, obtener su ID
      dishIdToAdd = dishes[existingDishIndex]?.id || "";
    }

    // Añadir el ID del plato a weekly en el día y tipo de comida especificados
    const dayData = getDayDataById(dayId);
    if (dayData) {
      dayData[mealType].push(dishIdToAdd);
    }
  };

  const deleteDish = (dayId: string, mealType: MealType, dishId: string) => {
    const day = getDayDataById(dayId);
    const dishIndexPosition = getPositionIndexById(day!, dishId, mealType);
    if (dishIndexPosition === undefined || dishIndexPosition === -1) return;
    day?.[mealType].splice(dishIndexPosition, 1);
  };

  const updateDish = (oldData: ModalData, newData: ModalData) => {
    // Actualizar los datos del plato (nombre y favorito)
    const dish = getDishById(newData.dishId);
    if (dish) {
      dish.name = newData.name;
      dish.favorite = newData.favorite;
    }

    // Si cambió el día o el tipo de comida, mover el plato a la nueva ubicación
    if (
      oldData.dayId !== newData.dayId ||
      oldData.mealType !== newData.mealType
    ) {
      // Eliminar de la ubicación anterior
      deleteDish(oldData.dayId, oldData.mealType, newData.dishId);

      // Añadir a la nueva ubicación
      const dayData = getDayDataById(newData.dayId);
      if (dayData) {
        dayData[newData.mealType].push(newData.dishId);
      }
    }
  };

  const toggleFavorite = (dishId: string) => {
    const dish = getDishById(dishId);
    if (dish) {
      dish.favorite = !dish.favorite;
    }
  };

  const removeAll = () => {
    weekly.value = createEmptyWeekly();
    dishes.splice(0, dishes.length);
    dishes.push(...createEmptyDishes());
  };

  return {
    weekly,
    dishes,
    addDish,
    updateDish,
    deleteDish,
    toggleFavorite,
    modalState,
    openModalDishes,
    closeModalDishes,
    modalOption,
    modalData,
    removeAll,
    getDishById,
    getIsFavorite,
  };
});
