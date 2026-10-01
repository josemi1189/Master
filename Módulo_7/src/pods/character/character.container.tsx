import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [isSave, setIsSave] = React.useState<'save' | 'error' | null>(null);

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (isSave === null) {
      return;
    }

    const timeoutId = setTimeout(() => setIsSave(null), 3000);
    return () => clearTimeout(timeoutId);
  }, [isSave]);

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    setIsSave(null);
    const apiCharacter = mapCharacterFromVmToApi(character);
    try {
      const response = await api.saveCharacter(apiCharacter);
      response ? setIsSave('save') : setIsSave('error');
    } catch {
      console.error('Could not save character. Please try again.');
      setIsSave('error');
    }
  };

  return (
    <CharacterComponent
      character={character}
      onSave={handleSave}
      isSave={isSave}
    />
  );
};
