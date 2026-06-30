import { HouseDetailsPod } from "@/pods/house-details";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function Details({ params }: Props) {
  const { id } = await params;
  return <HouseDetailsPod id={id} />;
}
