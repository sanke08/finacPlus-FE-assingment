import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "main",
      remotes: {
        // musicLibrary: "http://localhost:5001/assets/remoteEntry.js"
        musicLibrary: "https://finac-plus-fe-assingment.vercel.app/assets/remoteEntry.js",
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
