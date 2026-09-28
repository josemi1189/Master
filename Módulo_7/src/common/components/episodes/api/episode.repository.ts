import axios from 'axios';

export const getEpisodesByCharacter = async (episode: string) => {
  const url = 'https://rickandmortyapi.com/api/episode';
  try {
    const response = await axios.get(url, {
      params: {},
    });
    if (!response || response.status !== 200) {
      throw new Error(`Respuesta inválida: ${response?.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error('Ha habido un error de conexión', error);
  }
};
