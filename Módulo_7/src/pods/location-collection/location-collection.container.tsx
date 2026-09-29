import React from 'react';
import { useLocationCollection } from './location-collection.hook';
import { LocationCollectionComponent } from './location-collection.component';
import { useCharacterNameByUrl } from '#hooks/useCharacterName.js';

export const LocationCollectionContainer = () => {
  const { locationCollection, loadLocationCollection } =
    useLocationCollection();
  const { charactersById, loadCharacterName } = useCharacterNameByUrl();
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    loadLocationCollection(currentPage);
  }, [currentPage, loadLocationCollection]);

  React.useEffect(() => {
    const characterUrls = locationCollection.results.flatMap(
      (location) => location.residents
    );
    loadCharacterName(characterUrls);
  }, [locationCollection.results, loadCharacterName]);

  return (
    <LocationCollectionComponent
      locationCollection={locationCollection}
      charactersById={charactersById}
      currentPage={currentPage}
      onChangePage={handleCurrentPage}
    />
  );
};
