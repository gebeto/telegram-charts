import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    target: "es2015",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "src/index.js",
      name: "TelegramCharts",
      // formats: ["es", "cjs"],
      fileName: "TelegramCharts",
    },
  },
});
