export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  price: number;
  image: string;
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
  },
];
