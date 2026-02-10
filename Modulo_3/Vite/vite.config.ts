import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { bundleStats } from "rollup-plugin-bundle-stats";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    bundleStats(),
    compression({
      algorithms: ["gzip", "brotli"],
    }),
  ],
  build: {
    reportCompressedSize: true,
  },
});
