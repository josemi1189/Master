import axios from 'axios';
import * as API from './location-collection.api-model';

export const getLocationCollection = async (
  page: number = 1,
  filterName: string = ''
): Promise<API.LocationEntity> => {
  try {
    const response = await axios.get(import.meta.env.URL_LOCATION, {
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
