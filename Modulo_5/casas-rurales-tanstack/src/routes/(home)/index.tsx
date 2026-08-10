import { HouseList } from "@/pods/house-list";
import { createFileRoute } from "@tanstack/react-router";
import * as API from "@/pods/house-list/api";
import { mapHouseListToVM } from "@/pods/house-list/house-list.mapped.js";

export const Route = createFileRoute("/(home)/")({
  loader: async () => API.getHouseList(),
  headers: () => ({
    "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
  }),
  staleTime: 60_000,
  component: Home,
});

function Home() {
  const houseList: API.House[] = Route.useLoaderData();

  return <HouseList houses={mapHouseListToVM(houseList)} />;
}
