import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.ResultCharacters
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  gender: character.gender,
  city: character.location.name,
  species: character.species,
  status: character.status,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.ResultCharacters =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    gender: character.gender,
    city: character.city,
    species: character.species,
    status: character.status,
  }) as unknown as apiModel.ResultCharacters;
