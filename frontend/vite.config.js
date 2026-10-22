import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: __dirname, // Indicamos que la raíz frontend está aquí
  base: '/static/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // <--- ¡Esta es la clave que busca shadcn!
    },
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: resolve(__dirname,'./static/dist'),
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname,'src/main.jsx'),
    },
  },
});
