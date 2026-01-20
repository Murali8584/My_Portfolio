import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  // Use root path for local dev, but /My_Portfolio/ for production builds (GitHub Pages)
  const base = command === 'build' ? '/My_Portfolio/' : '/'
  
  return {
    plugins: [react()],
    base,
    server: {
      port: 3000,
      open: true
    },
  }
})

