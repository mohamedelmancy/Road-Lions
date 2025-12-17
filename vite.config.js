import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use / for Vercel, /Road-Lions/ for GitHub Pages, / for development
  base: '/',
  server: {
    port: 3000,
    open: true
  }
})

