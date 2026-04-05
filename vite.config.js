/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

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
    // Letar specifikt efter .js-filer i dina unit- och integration-mappar
    include: [
      'tests/unit/**/*.test.js',
      'tests/integration/**/*.test.js'
    ],
    exclude: [
      'tests/e2e/**', 
      'node_modules/**'
    ],
    environment: 'jsdom',
    globals: true
  }
});