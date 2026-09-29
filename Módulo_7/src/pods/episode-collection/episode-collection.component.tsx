import React from 'react';
import { EpisodeEntity } from './episode-collection.vm';
import * as classes from './episode-collection.styles';
import { Pagination } from '@mui/material';
import { CharacterList } from '#common/components';

interface Props {
  episodeCollection: EpisodeEntity;
  charactersById: Record<string, string>;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const EpisodeCollectionComponent: React.FC<Props> = (props) => {
  const { episodeCollection, charactersById, currentPage, onChangePage } =
    props;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  return (
    <>
      <section>
        <h1>Episodes</h1>
        <ul className={classes.list}>
          {episodeCollection.results.map((episode) => (
            <li key={episode.id} className={classes.card}>
              <div className={classes.row}>
                <span>Code:</span>
                <span className={classes.episode}>{episode.episode}</span>
              </div>
              <div className={classes.title}>
                <span>{episode.name}</span>
              </div>
              <div>
                <span className={classes.date}>Date of issue:</span>
                <span>{episode.airDate}</span>
              </div>
              <div>
                <span className={classes.date}>Created:</span>
                <span>{episode.created}</span>
              </div>
              <CharacterList
                titleAccordion="Characters"
                characters={episode.characters}
                charactersById={charactersById}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className={classes.pagination}>
        <Pagination
          siblingCount={0}
          count={episodeCollection.info.pages}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
