import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState<string>('');

  React.useEffect(() => {
    loadCharacterCollection(currentPage, filter);
  }, [currentPage, loadCharacterCollection, filter]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection(currentPage);
  };

  const handleFilterName = (filter: string) => {
    setFilter(filter);
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onChangePage={handleCurrentPage}
      onChangeFilter={handleFilterName}
    />
  );
};
