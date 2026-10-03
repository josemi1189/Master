import axios from 'axios';
import { CharacterListResponse } from './character-collection.api-model';

export const getCharacterCollection =
  async (): Promise<CharacterListResponse> => {
    try {
      const response = await axios.get(import.meta.env.URL_LOCAL_CHARACTER);
      if (!response || response.status !== 200) {
        throw new Error(`Respuesta inválida: ${response?.status}`);
      }
      return response.data;
    } catch (error) {
      throw new Error('Ha habido un error de conexión', error);
    }
  };

export const deleteCharacter = async (id: string): Promise<boolean> => {
  console.log('Delete character ID: ', id);
  return true;
};
