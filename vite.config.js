import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub project Pages URL: https://USER.github.io/REPO/ → base must be /REPO/
 * Set GITHUB_PAGES_BASE in CI (see .github/workflows/deploy-gh-pages.yml).
 * Local dev: unset → base '/' (http://localhost:5173/).
 * Custom domain at site root: set repo Variable PAGES_BASE to / in GitHub (Settings → Secrets and variables → Actions → Variables).
 */
function pagesBase() {
  const raw = process.env.GITHUB_PAGES_BASE
  if (raw == null || String(raw).trim() === '') return '/'
  let b = String(raw).trim()
  if (b === '/') return '/'
  if (!b.startsWith('/')) b = `/${b}`
  if (!b.endsWith('/')) b = `${b}/`
  return b
}

export default defineConfig({
  plugins: [react()],
  base: pagesBase(),
})
