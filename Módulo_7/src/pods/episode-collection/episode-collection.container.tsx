import React from 'react';
import { useEpisodeCollection } from './episode-collection.hook';
import { EpisodeCollectionComponent } from './episode-collection.component';

export const EpisodeCollectionContainer = () => {
  const { episodeCollection, loadEpisodeCollection, charactersById } =
    useEpisodeCollection();
  //const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    loadEpisodeCollection(currentPage);
  }, [currentPage, loadEpisodeCollection]);

  return (
    <EpisodeCollectionComponent
      episodeCollection={episodeCollection}
      charactersById={charactersById}
      currentPage={currentPage}
      onChangePage={handleCurrentPage}
    />
  );
};
