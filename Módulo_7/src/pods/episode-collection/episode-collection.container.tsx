import React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';
import { useCharacterNameByUrl } from '#hooks/useCharacterName.js';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection } = useEpisodeCollection();
  const { charactersById, loadCharacterName } = useCharacterNameByUrl();
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    loadEpisodeCollection(currentPage);
  }, [currentPage, loadEpisodeCollection]);

  React.useEffect(() => {
    const characterUrls = episodeCollection.results.flatMap(
      (episode) => episode.characters
    );
    loadCharacterName(characterUrls);
  }, [episodeCollection.results, loadCharacterName]);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      charactersById={charactersById}
      currentPage={currentPage}
      onChangePage={handleCurrentPage}
    />
  );
};
