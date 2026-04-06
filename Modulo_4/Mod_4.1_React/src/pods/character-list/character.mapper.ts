import * as api from "./api/character.model";
import { Character } from "./character-list.vm";

export const mapCharacterToVM = (character: api.Character): Character => ({
  created: character.created,
  episode: character.episode,
  gender: character.gender,
  id: character.id,
  image: character.image,
  name: character.name,
  species: character.species,
  status: character.status,
  type: character.type,
  url: character.url,
});

export const mapCharactersListToVM = (
  characters: api.Character[],
): Character[] => {
  if (characters.length > 0) {
    return characters.map((character) => mapCharacterToVM(character));
  } else {
    return [];
  }
};
