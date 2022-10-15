import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Set a custom port, defaul is 5173 😂
    port: 3001,
    open: true,
  },
  plugins: [react(), eslint()],
});
