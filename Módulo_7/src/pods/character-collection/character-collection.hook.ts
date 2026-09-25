import * as React from 'react';
import { CharacterEntityVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterCollectionFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] =
    React.useState<CharacterEntityVM>();

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      console.log('DEBUUG: ', result);
      setCharacterCollection(mapCharacterCollectionFromApiToVm(result));
    });
  };

  return { characterCollection, loadCharacterCollection };
};
