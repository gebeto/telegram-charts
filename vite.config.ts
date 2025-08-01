import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: "app",
    target: "es2015",
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: "src/main.js",
      name: "telegram-charts",
      formats: ["es", "cjs"],
      fileName: "telegram-charts",
    },
  },
});
