import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useDebounce } from 'use-debounce';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Character } from './character-collection.vm';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filter, setFilter] = React.useState<string>('');
  const [debouncedFilter] = useDebounce(filter, 1000);

  React.useEffect(() => {
    loadCharacterCollection();
  }, [loadCharacterCollection]);

  const characters = characterCollection?.results ?? [];
  const normalizedFilter = debouncedFilter.trim().toLowerCase();
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(normalizedFilter)
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE)
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCharacters: Character[] = filteredCharacters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  const handleFilterName = (filter: string) => {
    setFilter(filter);
    setCurrentPage(1);
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      visibleCharacters={visibleCharacters}
      currentPage={currentPage}
      totalPages={totalPages}
      search={filter}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onChangePage={handleCurrentPage}
      onChangeFilter={handleFilterName}
    />
  );
};
