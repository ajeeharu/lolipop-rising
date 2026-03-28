import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4 プラグインを追加
  ],
  server: {
    host: true, // Docker経由でアクセスするために必要
    watch: {
      usePolling: true, // Windowsでのホットリロード対策
    },
  },
})