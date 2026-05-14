export interface Dish {
  id: string;
  name: string;
  favorite: boolean;
}

export type Days =
  | (typeof DAYS)[number]
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado"
  | "Domingo";

export const DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
] as const;
export interface DayPlan {
  id: string;
  day: Days;
  lunch: string[];
  dinner: string[];
}

export type MealType = "lunch" | "dinner";

export type OptionModal = "add" | "modify";

export interface ModalData {
  dishId: string;
  name: string;
  dayId: string;
  mealType: MealType;
  favorite: boolean;
}
