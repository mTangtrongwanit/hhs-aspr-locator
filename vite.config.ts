import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import asprPackage from "./package.json";

// https://vitejs.dev/config/
export default defineConfig( ({mode}) => {
  return {
    plugins: [
      react(),
      svgr({
        include: "**/*.svg",
      }),
    ],
    base: process.env.BASE_PATH ? `/${process.env.BASE_PATH}/ ` : "/",
    publicDir: "public",
    define: {
      // mode value when running 'dev' or building with 'build-dev' is 'development' 
      // mode value running 'npm run build' is 'production'
      APP_MODE: JSON.stringify(mode), 
      // pulls version number from package.json
      APP_VERSION: JSON.stringify(asprPackage.version), 
    },
    resolve: {
      alias: {
        // Resolve the ~ alias to the src/ directory
        // This allows us to import like `import Button from '@/components/Button';`
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});
