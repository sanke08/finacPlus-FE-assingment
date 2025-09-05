import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "music_lib",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "musicLibrary",
      filename: "remoteEntry.js",
      exposes: {
        "./Library": "./src/App.tsx"
      },
      shared: ["react", "react-dom"]
    })
  ],

  server: {
    port: 5001,
    strictPort: true,
    cors: true,
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  }
})
