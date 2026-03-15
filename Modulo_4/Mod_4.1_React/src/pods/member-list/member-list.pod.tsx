import { useContext, useEffect, useState } from "react";
import { Member } from "./member-list.vm";
import { MemberListComponent } from "./member-list.component";
import { getMembers } from "../../hooks/useMembers/api";
import { mapMemberListtoVM } from "./member-list.mapper";
import { SearchContext } from "@/core/context/search.context";

export const MemberListPod = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const { filter } = useContext(SearchContext);

  useEffect(() => {
    getMembers(filter).then(mapMemberListtoVM).then(setMembers);
  }, [filter]);

  return <MemberListComponent members={members} />;
};
