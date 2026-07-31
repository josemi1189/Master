import { ENV } from "@/core/constants";

interface Props {
  LIMIT?: number;
}
interface IDs {
  id: string;
}
/**
 *
 * @param LIMIT :number Limit on the number of results returned
 * @returns {id: number}[]
 */
export const getListingStatisParams = async ({
  LIMIT,
}: Props): Promise<IDs[]> => {
  const url = `${ENV.BASE_API_URL}/houses`;
  const response = await fetch(url)
    .then((result) => result.json())
    .then((data) => data.slice(0, LIMIT));
  return response.map((result: IDs) => ({ id: result.id.toString() }));
};
