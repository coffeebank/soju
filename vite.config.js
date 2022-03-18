import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', 
      manifest: {
        name: "Soju for Spotify 🎶",
        short_name: "Soju",
        description: "Soju lets you explore music from Spotify on any device easily. Fetch a track's album, compare playlists, and sample different songs quickly and easily.",
        icons: [
          "/media/android-chrome-192x192.png",
          "/media/android-chrome-512x512.png"
        ],
        background_color: "#be0000",
        theme_color: "#be0000",
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: false,
  },
})
