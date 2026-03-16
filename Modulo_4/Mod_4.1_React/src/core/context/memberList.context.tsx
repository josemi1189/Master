import React from "react";
import { Member } from "@/core/models/member-vm.model";
import { useMembers } from "@/hooks/useMemberList/useMembers.hook";
import { SearchContext } from "./search.context";

interface MemberContext {
  membersData: Member[];
  isLoading: boolean;
}
export const MembersListContext = React.createContext<MemberContext>({
  isLoading: false,
  membersData: [],
});

export const MemberListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { organization } = React.useContext(SearchContext);
  const { membersData, isLoading } = useMembers(organization);

  return (
    <MembersListContext.Provider value={{ membersData, isLoading }}>
      {children}
    </MembersListContext.Provider>
  );
};
