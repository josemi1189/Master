export interface Character {
  id: string;
  name: string;
  species: string;
  gender: string;
  city: string;
  status: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  gender: '',
  city: '',
  status: '',
  image: '',
});
