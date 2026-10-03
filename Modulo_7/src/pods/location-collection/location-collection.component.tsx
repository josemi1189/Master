import React from 'react';
import * as VM from './location-collection.vm';
import * as classes from './location-collection.styles';
import { Pagination } from '@mui/material';
import { CharacterList } from '#common/components';

interface Props {
  locationCollection: VM.LocationEntity;
  charactersById: Record<string, string>;
  currentPage: number;
  onChangePage: (page: number) => void;
}
export const LocationCollectionComponent: React.FC<Props> = (props) => {
  const { locationCollection, charactersById, currentPage, onChangePage } =
    props;
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  return (
    <>
      <section>
        <h1>Locations</h1>
        <ul className={classes.list}>
          {locationCollection.results.map((location) => (
            <li key={location.id} className={classes.card}>
              <div className={classes.row}>
                <span>Type:</span>
                <span className={classes.type}>{location.type}</span>
              </div>
              <div className={classes.title}>
                <span>{location.name}</span>
              </div>
              <div>
                <span className={classes.date}>Dimension:</span>
                <span>{location.dimension}</span>
              </div>
              <div>
                <span className={classes.date}>Created:</span>
                <span>{location.created}</span>
              </div>
              <CharacterList
                titleAccordion="Residents"
                characters={location.residents}
                charactersById={charactersById}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className={classes.pagination}>
        <Pagination
          siblingCount={0}
          count={locationCollection.info.pages}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
