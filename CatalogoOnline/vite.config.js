// vite.config.js
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [Vue()],
  // Aggiungi questa opzione per abilitare il supporto ESM
  esbuild: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
