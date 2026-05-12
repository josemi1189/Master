export interface Dish {
  id: string;
  name: string;
  favorite: boolean;
}

export type Days =
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado"
  | "Domingo";

export interface WeekPlan {
  id: string;
  day: Days;
  lunch: Dish[];
  dinner: Dish[];
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
