import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from /3d-motion-portfolio/, while Render serves from /
  base: process.env.GITHUB_ACTIONS ? '/3d-motion-portfolio/' : '/'
})
