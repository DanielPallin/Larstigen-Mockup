import { resolve } from 'path';
// Ändra denna rad från 'vite' till 'vitest/config'
import { defineConfig } from 'vitest/config'; 

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'pages/dashboard.html'),
        barnprofil: resolve(__dirname, 'pages/barnprofil.html'),
        information: resolve(__dirname, 'pages/information.html'),
        dagbok: resolve(__dirname, 'pages/dagbok.html'),
        kalender: resolve(__dirname, 'pages/kalender.html')
      }
    }
  },
  test: {
    include: ['tests/unit/**/*.test.js'],
    environment: 'jsdom',
    globals: true
  }
});