import { PageLayout } from "#components/layout/pageLayout.js";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/detalle")({
  component: PageLayout,
});
