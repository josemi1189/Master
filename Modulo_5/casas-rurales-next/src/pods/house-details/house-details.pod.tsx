import React from "react";
import { HouseDetail } from "./house-detail.component";
import { House } from "./house.vm";

interface Props {
  houseDetails: House;
}
export const HouseDetailsPod: React.FC<Props> = ({ houseDetails }) => {
  return <HouseDetail house={houseDetails} />;
};
