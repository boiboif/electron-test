import { defineConfig } from 'vite';
import path from 'path'

// https://vitejs.dev/config
export default defineConfig({
  server: {
    port: 5050
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
