import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/absproxy/41234/',
    server: {
      host: '0.0.0.0',
      port: 41234,
      strictPort: true,
    },
})
