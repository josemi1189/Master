import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "@/components/layout/mainLayout";

export const Route = createFileRoute("/(home)")({
  component: MainLayout,
});
