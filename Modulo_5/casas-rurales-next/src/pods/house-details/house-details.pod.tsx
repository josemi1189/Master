import React from "react";
import { getHouseDetailsById } from "./api/house-details.api";
import { HouseDetail } from "./house-detail.component";
import { mapHouseDetailToVm } from "./house-detail.mapped";
interface Props {
  id: string;
}
export const HouseDetailsPod: React.FC<Props> = async ({ id }) => {
  const houseDetails = await getHouseDetailsById(id);

  return <HouseDetail house={mapHouseDetailToVm(houseDetails)} />;
};
