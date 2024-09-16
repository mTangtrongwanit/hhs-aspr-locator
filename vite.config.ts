import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import asprPackage from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  base: `/${asprPackage.name}/`,
  resolve: {
    alias: {
      // Resolve the ~ alias to the src/ directory
      // This allows us to import like `import Button from '@/components/Button';`
      "@": path.resolve(__dirname, "./src"),
    },
  },
});