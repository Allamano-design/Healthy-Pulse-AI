import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for root domain deployment
  base: "/", 
  server: {
    host: "::",
    port: 8080,
    // Allows Render to access the dev server if needed
    allowedHosts: ["healthy-pulse-ai.onrender.com"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Allows for cleaner imports using the @ symbol
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensures a clean production build for Render
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false, // Keeps the build size smaller

    target: 'esnext',
  },
});