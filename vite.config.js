/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // 1. Bygg-instruktionerna för Vercel
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'pages/dashboard.html'),
        barnprofil: resolve(__dirname, 'pages/barnprofil.html')
        // Lägg till de andra sidorna här när teamet bygger dem!
      }
    }
  },
  
  // 2. Test-instruktionerna från din gamla fil
  test: {
    include: ['tests/unit/**/*.test.js'],
    environment: 'jsdom', // Bra att ha om ni ska testa HTML-element i framtiden
    globals: true
  }
});