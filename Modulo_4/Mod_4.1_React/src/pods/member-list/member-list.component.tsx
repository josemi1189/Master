import { Member } from "./member-list.vm";
import style from "./member-list.module.scss";

interface Props {
  members: Member[];
}
export const MemberListComponent: React.FC<Props> = ({ members }) => {
  return (
    <>
      {members.length > 0 ? (
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
