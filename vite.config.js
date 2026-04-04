import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root-hosted deploy (e.g. custom domain or user/org site). For a project URL
// like https://USER.github.io/REPO/, set base: '/REPO/' instead.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
