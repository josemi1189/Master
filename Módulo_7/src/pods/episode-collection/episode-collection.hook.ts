import * as React from 'react';
import {
  createEmptyEpisodeEntity,
  EpisodeEntityApi,
} from './episode-collection.vm';
import {
  getEpisodeCollection,
  CharacterName,
  getCharacterNameById,
} from './api';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';

export const useEpisodeCollection = () => {
  const [charactersById, setCharactersById] = React.useState<
    Record<string, string>
  >({});
  const [episodeCollection, setEpisodeCollection] =
    React.useState<EpisodeEntityApi>(createEmptyEpisodeEntity());

  const loadEpisodeCollection = React.useCallback(async (page: number = 1) => {
    const result = await getEpisodeCollection(page);
    setEpisodeCollection(mapEpisodeCollectionFromApiToVm(result));

    const ids = [
      ...new Set(
        result.results
          .flatMap((episode) => episode.characters)
          .map((url) => url.split('/').pop())
          .filter((id) => id)
      ),
    ];

    const characters: CharacterName[] = await getCharacterNameById(ids);
    const entries: [string, string][] = characters.map(({ id, name }) => [
      id,
      name,
    ]);
    setCharactersById(Object.fromEntries(entries));
  }, []);

  return { episodeCollection, loadEpisodeCollection, charactersById };
};
