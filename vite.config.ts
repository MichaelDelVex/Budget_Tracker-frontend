import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/budgettracker': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      }
    }
  }
})
