import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterApiToVM = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  url: character.url,
  location: character.location,
  created: character.created,
  episode: character.episode,
  origin: character.origin,
  bestSentence: character.bestSentence,
});

export const mapCharacterCollectionFromApiToVm = (
  characters: apiModel.CharacterListResponse
): viewModel.CharacterListResponse => ({
  info: characters.info,
  results: characters.results.map((character) =>
    mapCharacterApiToVM(character)
  ),
});
