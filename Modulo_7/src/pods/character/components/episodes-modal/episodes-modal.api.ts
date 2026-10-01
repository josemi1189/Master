import axios from 'axios';
import { Episode } from './episodes.vm';

export const getEpisodesByIds = async (ids: string[]): Promise<Episode[]> => {
  if (ids.length === 0) return [];

  const url = `https://rickandmortyapi.com/api/episode/${ids.join(',')}`;
  try {
    const response = await axios.get<Episode | Episode[]>(url);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    throw new Error('Ha habido un error de conexión', { cause: error });
  }
};
