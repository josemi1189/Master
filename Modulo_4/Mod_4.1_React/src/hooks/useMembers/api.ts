import { Member } from "@/core/models/api.model";

export const getMembers = async (filter: string): Promise<Member[]> => {
  const response = await fetch(`https://api.github.com/orgs/${filter}/members`);

  if (!response.ok) {
    return [];
  } else {
    return response.json();
  }
};
