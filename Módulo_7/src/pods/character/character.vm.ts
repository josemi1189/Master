export interface Character {
  id: string;
  name: string;
  species: string;
  gender: string;
  locationName: string;
  status: string;
  image: string;
  episode: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  gender: '',
  locationName: '',
  status: '',
  image: '',
  episode: [''],
});
