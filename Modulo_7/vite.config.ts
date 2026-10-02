import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['URL_'],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/thumbnails': 'http://localhost:3000',
    },
  },
});
