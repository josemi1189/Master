import { MainLayout } from "#components/layout/mainLayout.js";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(home)")({
  component: MainLayout,
});
