interface LOCATION {
  name: string;
  url: string;
}
interface ORIGIN {
  name: string;
  url: string;
}
export interface ResultCharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ORIGIN;
  location: LOCATION;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterEntityApi {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ResultCharacters[];
}
