import { CaractersListPod } from "@/pods/character-list";
import { getCharacterList } from "@/pods/character-list/api";

export const Rickandmorty: React.FC = async () => {
  const charactersList = await getCharacterList();
  console.log("characterList: ", charactersList);
  return <CaractersListPod charactersList={charactersList} />;
};
