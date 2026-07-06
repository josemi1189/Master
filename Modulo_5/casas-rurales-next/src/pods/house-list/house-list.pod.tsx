import { getHouseList } from "./api";
import { HouseList } from "./house-list.component";

export const HouseListPod = async () => {
  const houseList = await getHouseList();
  return <HouseList houses={houseList} />;
};
