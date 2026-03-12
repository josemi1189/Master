import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { fileURLToPath, URL } from "node:url";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import react from "@vitejs/plugin-react";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
  },
};

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  server: {
    host: "0.0.0.0", // Escucha en cualquier interfaz
    port: 5173,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: vitestConfig.test,
});
