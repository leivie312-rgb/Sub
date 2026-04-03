import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Vite PWA',
      short_name: 'VitePWA',
      description: 'A Vite-powered Progressive Web App',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: '.',
      scope: '.',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
    }
  })],
});