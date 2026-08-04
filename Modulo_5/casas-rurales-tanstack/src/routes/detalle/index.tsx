import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detalle/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/(details)/"!</div>;
}
