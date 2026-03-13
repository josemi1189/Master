import * as am from "./api/api.model";
import * as vm from "./member-list.vm";

export const mapMemberToVm = (member: am.Member): vm.Member => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
});

export const mapMemberListtoVM = (members: am.Member[]): vm.Member[] => {
  return members.map((member) => mapMemberToVm(member));
};
