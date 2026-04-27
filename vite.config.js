import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This allows you to use '@/components/...' instead of '../../components/...'
      "@": path.resolve(__dirname, "./src"),
    },
  },
});