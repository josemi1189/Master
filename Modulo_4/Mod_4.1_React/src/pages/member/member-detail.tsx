import { MemberDetailPod } from "@/pods/member-detail/member-detail.pod";
import { switchRoutes } from "@/router";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const MemberDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(switchRoutes.home);
    }
  }, [id]);
  if (!id) return null;

  return <MemberDetailPod id={id} />;
};
