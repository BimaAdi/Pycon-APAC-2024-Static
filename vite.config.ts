import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/Pycon-APAC-2024-Static',
  build: {
    outDir: './docs',
    emptyOutDir: true
  }
})
