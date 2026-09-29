import axios from 'axios';
import {
  CharacterName,
  EpisodeEntityApi,
} from './episode-collection.api-model';
import * as CONSTANT from '#constants';

export const getEpisodeCollection = async (
  page: number = 1,
  filterName: string = ''
): Promise<EpisodeEntityApi> => {
  try {
    const response = await axios.get(CONSTANT.urlEpisode, {
      params: { page },
    });
    if (!response || response.status !== 200) {
      throw new Error(`Respuesta inválida: ${response?.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error('Ha habido un error de conexión', error);
  }
};

export const getCharacterNameById = async (ids: string[]) => {
  if (ids.length === 0) return [];

  const url = `${CONSTANT.urlCharacter}/${ids.join(',')}`;
  try {
    const response = await axios.get<CharacterName | CharacterName[]>(url);
    if (!response || response.status !== 200) {
      throw new Error(`Respuesta inválida: ${response?.status}`);
    }
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    throw new Error('Ha habido un error de conexión', error);
  }
};
