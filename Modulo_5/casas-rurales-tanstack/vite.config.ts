// vite.config.ts
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tanstackStart(), react()],
  resolve: {
    alias: {
      "#": "/src",
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/_variables" as *;`,
      },
    },
    modules: {
      localsConvention: "camelCase",
    },
  },
});
