import * as React from 'react';
import {
  createEmptyEpisodeEntity,
  EpisodeEntity,
} from './episode-collection.vm';
import { getEpisodeCollection } from './api';
import { mapEpisodeCollectionFromApiToVm } from './episode-collection.mapper';

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] =
    React.useState<EpisodeEntity>(createEmptyEpisodeEntity());

  const loadEpisodeCollection = React.useCallback(async (page: number = 1) => {
    const result = await getEpisodeCollection(page);
    setEpisodeCollection(mapEpisodeCollectionFromApiToVm(result));
  }, []);

  return { episodeCollection, loadEpisodeCollection };
};
