import { ResultCharacters } from './character.api-model';
import * as CONSTANT from '#constants';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<ResultCharacters> => {
  const url = `${CONSTANT.localUrlCharacter}/${id}`;

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
  const url = `${CONSTANT.localUrlCharacter}/${character.id}`;

  try {
    const response = await axios.put(url, character);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Respuesta inválida: ${response?.status}`);
    }
    return true;
  } catch (error) {
    throw new Error('Ha habido un error de conexión', error);
  }
};
