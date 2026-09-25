import { ResultCharacters } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<ResultCharacters> => {
  return mockCharacterCollection.find((h) => h.id.toString() === id);
};

export const saveCharacter = async (
  character: ResultCharacters
): Promise<boolean> => {
  return true;
};
