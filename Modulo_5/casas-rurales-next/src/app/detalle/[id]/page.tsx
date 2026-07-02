import { PageLayout } from "@/layouts/pageLayout";
import { HouseDetailsPod } from "@/pods/house-details";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function Details({ params }: Props) {
  const { id } = await params;
  return (
    <PageLayout>
      <HouseDetailsPod id={id} />
    </PageLayout>
  );
}
