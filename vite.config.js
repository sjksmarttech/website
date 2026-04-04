import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project site, set base to '/your-repo-name/'
// For custom domain (e.g. sjksmarttech.com), keep base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
