import { useContext } from "react";
import { MemberListComponent } from "./member-list.component";
import { MembersListContext } from "@/core/context/memberList.context";

export const MemberListPod = () => {
  const { membersData, isLoading } = useContext(MembersListContext);

  return <MemberListComponent members={membersData} loading={isLoading} />;
};
