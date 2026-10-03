import * as React from 'react';
import { CharacterListResponse } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharacterListResponse>();

  const loadCharacterCollection = React.useCallback(() => {
    getCharacterCollection().then((result) => {
      setCharacterCollection(mapCharacterCollectionFromApiToVm(result));
    });
  }, []);
  return { characterCollection, loadCharacterCollection };
};
