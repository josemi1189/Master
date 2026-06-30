import type { Metadata } from "next";
import "../assets/css/global-styles.scss";

export const metadata: Metadata = {
  title: "Casas rurales - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
