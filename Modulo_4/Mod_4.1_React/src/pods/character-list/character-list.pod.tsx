import { CharactersListComponent } from "./character-list.component";
import { Character } from "./character-list.vm";

interface Props {
  charactersList: Character[];
}
export const CaractersListPod: React.FC<Props> = ({ charactersList }) => {
  return <CharactersListComponent charactersList={charactersList} />;
};
