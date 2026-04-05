import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Lista alla era HTML-filer här så Vite bygger dem
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'pages/dashboard.html'),
        barnprofil: resolve(__dirname, 'pages/barnprofil.html')
        // Lägg till Sandras och Julias sidor här sen!
      }
    }
  }
});