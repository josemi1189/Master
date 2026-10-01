import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import * as CONSTANT from '#constants';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection =
  async (): Promise<CharacterListResponse> => {
    try {
      const response = await axios.get(CONSTANT.localUrlCharacter);
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
