import * as API from "#pods/house-details/api";
import { HouseDetail } from "#pods/house-details/house-detail.js";
import { House } from "#pods/house-details";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detalle/$id")({
  loader: async ({ params }) =>
    await API.getHouseDetailsById({ data: { id: params.id } }),
  headers: () => ({
    "Cache-Control": "public, max-age=300, stale-while-revalidate=300",
  }),
  staleTime: 60_000,
  component: RouteComponent,
});

function RouteComponent() {
  const house: House = Route.useLoaderData();
  return <HouseDetail house={house} />;
}
