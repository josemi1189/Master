import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tsConfigPaths(), checker({ typescript: true }), react()],
});
