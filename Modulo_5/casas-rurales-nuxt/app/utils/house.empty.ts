import type { House } from "~/types/house";

export const createEmptyHouseListToVM = (): House[] => [
  {
    id: "",
    name: "",
    description: "",
    address: "",
    city: "",
    price: 0,
    image: "",
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    rating: 0,
    totalReviews: 0,
  },
];
