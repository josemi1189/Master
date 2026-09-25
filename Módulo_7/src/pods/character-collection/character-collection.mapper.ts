import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterApiToVM = (
  character: apiModel.ResultCharacters
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  url: character.url,
  location: character.location,
});

export const mapCharacterCollectionFromApiToVm = (
  characters: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVM => ({
  info: characters.info,
  results: characters.results.map((character) =>
    mapCharacterApiToVM(character)
  ),
});
