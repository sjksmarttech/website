import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://sjksmarttech.github.io/website/
// For custom domain (e.g. sjksmarttech.com), use base: '/'
const base = '/website/'

/** Dev server returns 404 for /website without trailing slash; redirect to /website/ */
function redirectBaseWithoutTrailingSlash() {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base
  if (!prefix) {
    return null
  }
  return {
    name: 'redirect-base-trailing-slash',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url ?? '/'
        const q = raw.indexOf('?')
        const pathOnly = q === -1 ? raw : raw.slice(0, q)
        const search = q === -1 ? '' : raw.slice(q)
        if (pathOnly === prefix) {
          const loc = base.endsWith('/') ? base : `${base}/`
          res.writeHead(302, { Location: loc + search })
          res.end()
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), redirectBaseWithoutTrailingSlash()].filter(Boolean),
})
