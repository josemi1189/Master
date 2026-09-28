import * as React from 'react';
import { CharacterEntityVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharacterEntityVM>();

  const loadCharacterCollection = React.useCallback(
    (page: number = 1, name: string = '') => {
      getCharacterCollection(page, name).then((result) => {
        setCharacterCollection(mapCharacterCollectionFromApiToVm(result));
      });
    },
    []
  );
  return { characterCollection, loadCharacterCollection };
};
