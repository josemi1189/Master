import { ResultCharacters } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<ResultCharacters[]> => {
  return characterCollection;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter(
    (h) => h.id.toString() !== id
  );
  return true;
};
