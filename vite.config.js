import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: '1404',
  },
  resolve: {
    alias: [
      { find: '@components', replacement: resolve(__dirname, '/src/components') },
      { find: '@assets', replacement: resolve(__dirname, '/src/assets') },
      { find: '@pages', replacement: resolve(__dirname, '/src/pages') },
    ],
  },
})
