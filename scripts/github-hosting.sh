#!/usr/bin/env bash
# Build the site and show how to host it on GitHub Pages (GitHub Actions workflow).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> SJK SmartTech — GitHub Pages prep"
echo "    Project root: $ROOT"
echo ""

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Error: '$1' is required but not installed." >&2
    exit 1
  }
}

need_cmd node
need_cmd npm

NODE_MAJOR="$(node -p "parseInt(process.version.slice(1), 10)" 2>/dev/null || echo 0)"
if [[ "$NODE_MAJOR" -lt 18 ]]; then
  echo "Warning: Node 18+ recommended (GitHub Actions uses 20). Current: $(node -v)" >&2
fi

echo "==> Installing dependencies"
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
  echo ""
  echo "Tip: Commit package-lock.json so GitHub Actions can run 'npm ci' reliably."
fi

echo ""
echo "==> Production build (dist/ + 404.html + .nojekyll for SPA routing)"
npm run build

echo ""
echo "-------------------------------------------------------------------"
echo " GitHub hosting steps (do once per new repo)"
echo "-------------------------------------------------------------------"
cat <<'STEPS'

  1) Create an empty repository on GitHub (no README/license if you will push existing files).

  2) From this project folder, connect and push (use your URL and branch name):

       git init
       git add .
       git commit -m "Initial site"
       git branch -M main
       git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
       git push -u origin main

     If the repo already exists and has a remote:

       git remote -v
       git push -u origin main

  3) Enable GitHub Pages with Actions:
       GitHub repo → Settings → Pages → Build and deployment
       → Source: "GitHub Actions" (not "Deploy from a branch").

  4) First push to main/master runs .github/workflows/deploy-pages.yml.
     Check: Actions tab → latest workflow → should be green.
     Your site URL appears in the workflow summary (Pages environment URL).

  5) Custom domain (sjksmarttech.com):
       - public/CNAME already contains the hostname for Pages.
       - In repo Settings → Pages → Custom domain: sjksmarttech.com
       - At your DNS provider, add the records GitHub shows (A/AAAA or CNAME).
       - Wait for DNS; optionally enforce HTTPS in Pages settings.

  6) SPA routes: build copies index.html to dist/404.html so deep links work on Pages.

  If you use a project site WITHOUT a custom domain (https://USER.github.io/REPO/),
  set base in vite.config.js to '/REPO/' and rebuild before pushing.

STEPS

echo "-------------------------------------------------------------------"
echo " Build output: $ROOT/dist"
echo " Done."
echo ""
