import { PageLayout } from "@/layouts/pageLayout";
import { HouseDetailsPod } from "@/pods/house-details";
import { getHouseDetailsById } from "@/pods/house-details/api/house-details.api";
import { mapHouseDetailToVm } from "@/pods/house-details/house-detail.mapped";

import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const house = await getHouseDetailsById(id).then(mapHouseDetailToVm);

  return {
    title: `${house.name} - Casas Rurales`,
    description: house.description,
  };
}
interface Props {
  params: Promise<{ id: string }>;
}

export default async function Details({ params }: Props) {
  const { id } = await params;
  const house = await getHouseDetailsById(id).then(mapHouseDetailToVm);
  return (
    <PageLayout>
      <HouseDetailsPod houseDetails={house} />
    </PageLayout>
  );
}
