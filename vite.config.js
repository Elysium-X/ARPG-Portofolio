import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],

  server: {
    port: 3000,
    open: true,
  },

  build: {
    // Faster & recommended minifier
    minify: "esbuild",

    // Remove console/debugger in production
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },

    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
