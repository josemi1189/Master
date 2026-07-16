import { MainLayout } from "@/components/layouts";
import { HouseListPod } from "@/pods/house-list";

export const revalidate = 10;
export default function Home() {
  return (
    <MainLayout>
      <HouseListPod />
    </MainLayout>
  );
}
