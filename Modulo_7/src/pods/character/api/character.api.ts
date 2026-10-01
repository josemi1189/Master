import { ResultCharacters } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCharacterCollection } from './character.mock-data';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<ResultCharacters> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

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

export const saveCharacter = async (
  character: ResultCharacters
): Promise<boolean> => {
  return true;
};
