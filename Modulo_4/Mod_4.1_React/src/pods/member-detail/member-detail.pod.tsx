import { MemberDetailComponent } from "./member-detail.component";
import { useContext, useEffect } from "react";
import { MembersListContext } from "@/core/context/memberList.context";
import { createEmptyMember, Member } from "@/core/models/member-vm.model";
import React from "react";

interface Props {
  id: string;
}
export const MemberDetailPod: React.FC<Props> = ({ id }) => {
  const [member, setMember] = React.useState<Member>(createEmptyMember());

  const { membersData } = useContext(MembersListContext);

  useEffect(() => {
    const data = membersData.find((member) => member.login === id);
    if (data) setMember(data);
  }, [membersData, id]);

  return <MemberDetailComponent key={member.id} member={member} />;
};
