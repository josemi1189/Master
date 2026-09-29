import * as API from './api';
import * as VM from './episode-collection.vm';

export const mapLocationCollectionFromApiToVm = (
  episodes: API.EpisodeEntityApi
): VM.EpisodeEntity => ({
  info: episodes.info,
  results: episodes.results.map((episode: API.Episode) => ({
    id: episode.id,
    name: episode.name,
    url: episode.url,
    episode: episode.episode,
    characters: episode.characters,
    airDate: episode.air_date,
    created: episode.created,
  })),
});
