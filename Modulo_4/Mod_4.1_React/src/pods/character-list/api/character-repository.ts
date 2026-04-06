import { Character } from "./character.model";

export const getCharacterList = async (): Promise<Character[]> => {
  const result = await fetch("https://rickandmortyapi.com/api/character");
  if (result) {
    console.log("Result: ", result.json());
    return result.json();
  } else {
    return [];
  }
};
