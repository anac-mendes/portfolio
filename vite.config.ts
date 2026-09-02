import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env["NODE_ENV"] === "production" ? "/portfolio/" : "/",
  plugins: [tailwindcss(), react(), tsConfigPaths()],
});
