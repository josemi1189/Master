import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.ResultCharacters
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  locationUrl: character.location.url,
  location: character.location.name,
  bestSentence: character.bestSentence ?? '',
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.ResultCharacters => {
  const { location, locationUrl, id, ...characterData } = character;

  return {
    ...characterData,
    id: Number(id),
    location: { name: location, url: locationUrl },
  };
};
