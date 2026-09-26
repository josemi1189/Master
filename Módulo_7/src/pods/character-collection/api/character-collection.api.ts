import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi> => {
  const url = 'https://rickandmortyapi.com/api/character';

  try {
    let response = await axios.get(url);
    if (!response || response.status !== 200) {
      throw new Error(`Respuesta inválida: ${response?.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error('Ha habido un error de conexión', error);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter(
    (h) => h.id.toString() !== id
  );
  return true;
};
