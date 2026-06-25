import { getHouseList } from "./api";
import { HouseList } from "./house-list.component";
import { mapHouseListToVM } from "./house-list.mapped";

export const HouseListPod = async () => {
  const houseList = await getHouseList();
  return <HouseList houses={mapHouseListToVM(houseList)} />;
};
