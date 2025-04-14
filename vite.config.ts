import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: 5173,
      strictPort: true,
      host: true,
      hmr: {
        timeout: 120000,
        protocol: 'ws',
        host: 'localhost',
        port: 5173,
        clientPort: 5173,
        overlay: false
      },
      watch: {
        usePolling: true,
        interval: 1000,
        followSymlinks: true,
        ignored: ['**/node_modules/**', '**/dist/**']
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    define: {
      // Expose .env variables to the client-side
      'import.meta.env.VITE_KOMMO_DOMAIN': JSON.stringify(env.VITE_KOMMO_DOMAIN),
      'import.meta.env.VITE_KOMMO_SECRET_KEY': JSON.stringify(env.VITE_KOMMO_SECRET_KEY),
      'import.meta.env.VITE_KOMMO_INTEGRATION_ID': JSON.stringify(env.VITE_KOMMO_INTEGRATION_ID)
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['@radix-ui/react-toast', '@radix-ui/react-navigation-menu'],
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: true
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['path']
    }
  };
});
