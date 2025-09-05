import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base:"/finacPlus-FE-assingment/main/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "main",
      remotes: {
        musicLibrary: "https://sanke08.github.io/finacPlus-FE-assingment/music_lib/assets/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    })

  ],

  server: {
    port: 5000,
    strictPort: true,
    cors: true,
  },

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
