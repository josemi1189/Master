export interface Review {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}

export interface HouseDetails {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  price: number;
  image: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  amenities: string[];
  reviews: Review[];
}
