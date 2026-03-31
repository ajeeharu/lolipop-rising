import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Dockerからアクセスするために必要
    watch: {
      usePolling: true, // WSL2環境でのホットリロード安定化
    },
  },
})