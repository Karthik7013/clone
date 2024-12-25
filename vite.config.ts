import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',  // Output directory for the production build
        sourcemap: true, // Optionally generate source maps for debugging
    },
    server: {
        port: 3000,  // You can change the development server port if needed
    }
});
