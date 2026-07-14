import { MainLayout } from "@/components/layouts";
import { HouseListPod } from "@/pods/house-list";

export default function Home() {
  return (
    <MainLayout>
      <HouseListPod />
    </MainLayout>
  );
}
