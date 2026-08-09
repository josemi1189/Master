// https://tanstack.com/start/latest/docs/framework/react/build-from-scratch
import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import "@/assets/css/styles.scss";
import { NotFound } from "#components/notFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanstack - Casas rurales" },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});
const queryClient = new QueryClient();
function RootComponent() {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <main>
          <Outlet />
        </main>
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body cz-shortcut-listen="true">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
