import { Member } from "./member-list.vm";
import style from "./member-list.module.scss";
import { DetailIcon } from "@/common/icons";
import { generatePath, Link } from "react-router-dom";
import { switchRoutes } from "@/router";

interface Props {
  members: Member[];
  loading: boolean;
}
export const MemberListComponent: React.FC<Props> = ({ members, loading }) => {
  return (
    <>
      {loading ? (
        <div className={style.error}>
          <span>Cargando</span>
        </div>
      ) : members.length > 0 ? (
        <>
          <div className={style.headRow}>
            <span>Avatar</span>
            <span>ID</span>
            <span>Name</span>
          </div>
          <div className={style.memberList}>
            {members.map((member) => (
              <div key={member.id} className={style.rowData}>
                <span>
                  <img src={member.avatarUrl} alt={member.login} />
                </span>
                <span>{member.id}</span>
                <span>{member.login}</span>
                <span>
                  <Link
                    to={generatePath(switchRoutes.details, {
                      id: member.login,
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
