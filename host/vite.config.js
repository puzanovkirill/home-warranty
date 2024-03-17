import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    federation({
      name: 'app',
      remotes: {
        workerApp: 'http://localhost:5001/assets/remoteEntry.js',
        userApp: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
