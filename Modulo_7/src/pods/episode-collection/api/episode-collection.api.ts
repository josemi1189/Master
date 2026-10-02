import axios from 'axios';
import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (
  page: number = 1
): Promise<EpisodeEntityApi> => {
  try {
    const response = await axios.get(import.meta.env.URL_EPISODE, {
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
