import * as React from 'react';
import {
  createEmptyEpisodeEntity,
  EpisodeEntity,
} from './episode-collection.vm';
import { getEpisodeCollection } from './api';
import { mapLocationCollectionFromApiToVm } from './episode-collection.mapper';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] =
    React.useState<EpisodeEntity>(createEmptyEpisodeEntity());

  const loadEpisodeCollection = React.useCallback(async (page: number = 1) => {
    const result = await getEpisodeCollection(page);
    setEpisodeCollection(mapLocationCollectionFromApiToVm(result));
  }, []);

  return { episodeCollection, loadEpisodeCollection };
};
