interface LOCATION {
  name: string;
  url: string;
}

export interface CharacterEntityVm {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  location: LOCATION;
}
