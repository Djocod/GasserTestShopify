import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": '"production"',
    "process.env": "{}",
    global: "window",
  },
  build: {
    lib: {
      entry: "storefront/products-cards.js",
      name: "ProductsCards",
      fileName: "products-cards",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        intro:
          'if(typeof process==="undefined"){var process={env:{NODE_ENV:"production"}};}',
      },
    },
    outDir: "extensions/gasser-template-test/assets",
    emptyOutDir: false,
    chunkSizeWarningLimit: 2000,
  },
});
