import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.join(__dirname, "src"),
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: path.join(__dirname, "dist"),
    target: "es2015",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "index.js",
      name: "TelegramCharts",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: "TelegramCharts",
    },
  },
});
