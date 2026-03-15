import * as am from "@/core/models/api.model";
import * as vm from "./member-list.vm";

export const mapMemberToVm = (member: am.Member): vm.Member => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
});

export const mapMemberListtoVM = (members: am.Member[]): vm.Member[] => {
  if (members.length > 0) {
    return members.map((member) => mapMemberToVm(member));
  } else {
    return [];
  }
};
