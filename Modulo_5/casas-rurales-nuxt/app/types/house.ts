export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  price: number;
  image: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  totalReviews: number;
}

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
