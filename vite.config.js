import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "First and Last Marketing",
        short_name: "FNL Marketing",
        description: "Professional web design, SEO, hosting, and reputation management in Missouri.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0d0d0d",
        lang: "en",
        icons: [
          {
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/firstandlastmarketing\.com\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'fnl-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
            },
          }
        ],
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  
  build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
          if (id.includes('aos')) return 'vendor_aos';
          if (id.includes('react-router')) return 'vendor_router';
        }
      }
    }
  },
  // Optional: raise the chunk size limit warning
  chunkSizeWarningLimit: 1000
}

});
