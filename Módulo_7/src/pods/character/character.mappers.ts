import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.ResultCharacters
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  gender: character.gender,
  locationName: character.location.name,
  species: character.species,
  status: character.status,
  image: character.image,
  episode: character.episode,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.ResultCharacters =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    gender: character.gender,
    city: character.locationName,
    species: character.species,
    status: character.status,
    image: character.image,
    episode: character.episode,
  }) as unknown as apiModel.ResultCharacters;
