// vite.config.js - CORRECTED CONFIGURATION
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Optional: Add port: 5174 here if 5173 is causing EADDRINUSE
    proxy: {
      // ⚠️ BOTH targets MUST point to the backend server (e.g., Laravel on port 8000)
      '/api': {
        target: 'http://127.0.0.1:8000', // <-- Your backend server (e.g., Laravel)
        changeOrigin: true,
        secure: false, // You might need this if using HTTP locally
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    },
  },
});
