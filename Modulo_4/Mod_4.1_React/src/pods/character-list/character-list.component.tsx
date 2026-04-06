import { Character } from "./character-list.vm";
import style from "./character-list.module.scss";
import { DetailIcon } from "@/common/icons";
import { generatePath, Link } from "react-router-dom";
import { switchRoutes } from "@/router";

interface Props {
  charactersList: Character[];
}
export const CharactersListComponent: React.FC<Props> = ({
  charactersList,
}) => {
  return (
    <>
      {charactersList.length > 0 ? (
        <>
          <div className={style.headRow}>
            <span>Avatar</span>
            <span>ID</span>
            <span>Name</span>
          </div>
          <div className={style.memberList}>
            {charactersList.map((member) => (
              <div key={member.id} className={style.rowData}>
                <span>
                  <img src={member.image} alt={member.name} />
                </span>
                <span>{member.id}</span>
                <span>{member.name}</span>
                <span>
                  <Link
                    to={generatePath(switchRoutes.details, {
                      id: member.name,
                    })}
                  >
                    <DetailIcon />
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={style.error}>
          <span>No se han obtenido resultados</span>
        </div>
      )}
    </>
  );
};
