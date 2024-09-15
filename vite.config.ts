
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directorio de salida para la build
    rollupOptions: {
      input: {
        main: 'index.html', // Archivo de entrada principal
      }
    }
  },
  server: {
    port: 3000, // Puerto para el servidor de desarrollo
  },
  // Puedes agregar otras configuraciones según lo necesites
});
