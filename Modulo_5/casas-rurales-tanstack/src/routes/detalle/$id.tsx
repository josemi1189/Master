import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detalle/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return <div>Página detalle - {id}</div>;
}
