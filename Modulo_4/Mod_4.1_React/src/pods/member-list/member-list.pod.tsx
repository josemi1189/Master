import { useEffect, useState } from "react";
import { Member } from "./member-list.vm";
import { MemberListComponent } from "./member-list.component";
import { getMembers } from "./api/api";
import { mapMemberListtoVM } from "./member-list.mapper";

export const MemberListPod = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    getMembers().then(mapMemberListtoVM).then(setMembers);
  }, []);

  return <MemberListComponent members={members} />;
};
