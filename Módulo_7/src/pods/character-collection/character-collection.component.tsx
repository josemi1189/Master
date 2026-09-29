import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVM } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Box, Pagination } from '@mui/material';
import { useDebounce } from 'use-debounce';

interface Props {
  characterCollection?: CharacterEntityVM;
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChangePage: (page: number) => void;
  onChangeFilter: (filter: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    onChangePage,
    onChangeFilter,
  } = props;
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState<string>('');
  const [debounceSearch] = useDebounce(search, 1000);

  React.useEffect(() => {
    onChangeFilter(debounceSearch);
  }, [debounceSearch]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    onChangePage(value);
  };
  if (!characterCollection) {
    return <div>Cargando personajes...</div>;
  }

  return (
    <>
      <section className={classes.root}>
        <div className={classes.head}>
          <Button
            variant="contained"
            color="primary"
            onClick={onCreateCharacter}
          >
            Add character
          </Button>
          <Box
            component={'input'}
            aria-label="Name filter"
            placeholder="Filter by name"
            sx={{ borderRadius: '6px', padding: '0.5em 1em' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className={classes.list}>
          {characterCollection.results.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className={classes.pagination}>
        <Pagination
          count={characterCollection.info.pages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
