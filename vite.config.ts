import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => ({
  root: path.join(__dirname, "src"),
  server: {
    port: 3000,
    strictPort: true,
  },
  publicDir: mode === "development" ? "../assets" : false,
  build: {
    rollupOptions: {
      external: (id) => id.startsWith("/assets/"),
    },
    outDir: path.join(__dirname, "dist"),
    target: "es2015",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "index.ts",
      name: "TelegramCharts",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: "TelegramCharts",
    },
  },
}));
