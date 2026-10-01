export interface Character {
  id: string;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: string;
  locationUrl: string;
  status: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  type: '',
  gender: '',
  origin: { name: '', url: '' },
  location: '',
  locationUrl: '',
  status: '',
  image: '',
  episode: [''],
  url: '',
  created: '',
  bestSentence: '',
});
