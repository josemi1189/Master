import { Member } from "@/core/models/member-vm.model";
import style from "./member-detail.module.scss";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/router";
interface Props {
  member: Member;
}
export const MemberDetailComponent: React.FC<Props> = ({ member }) => {
  return (
    <div className={style.content}>
      <div className={style.linkBefore}>
        <span>
          <Link to={switchRoutes.home}>Página principal</Link>
        </span>
      </div>
      <div className={style.member}>
        <div className={style.image}>
          {member.avatarUrl && (
            <img src={member.avatarUrl} alt={`Imagen de ${member.login}`} />
          )}
        </div>
        <div className={style.rowData}>
          <div>
            <label>ID:</label>
            <span>{member.id}</span>
          </div>
          <div>
            <label>Usuario: </label>
            <span>{member.login}</span>
          </div>
          <div>
            <label>GitHub: </label>
            <span>{member.htmlUrl}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
