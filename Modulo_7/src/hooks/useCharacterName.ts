import axios from 'axios';
import React from 'react';

export interface CharacterName {
  id: string;
  name: string;
}

export const getCharacterNameById = async (ids: string[]) => {
  if (ids.length === 0) return [];

  const url = `${import.meta.env.URL_LOCAL_CHARACTER}/${ids.join(',')}`;
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

export const useCharacterNameByUrl = () => {
  const [charactersById, setCharactersById] = React.useState<
    Record<string, string>
  >({});

  const loadCharacterName = React.useCallback(async (urls: string[]) => {
    const ids = [
      ...new Set(urls.map((url) => url.split('/').pop()).filter((id) => id)),
    ];
    const characters: CharacterName[] = await getCharacterNameById(ids);
    const entries: [string, string][] = characters.map(({ id, name }) => [
      id,
      name,
    ]);
    setCharactersById(Object.fromEntries(entries));
  }, []);
  return { loadCharacterName, charactersById };
};
