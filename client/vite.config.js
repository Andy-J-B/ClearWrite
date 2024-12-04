import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    eslintPlugin({
      fix: true, // Automatically attempt to fix problems on save
      include: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"], // Add your source file patterns here
    }),
  ],
});
