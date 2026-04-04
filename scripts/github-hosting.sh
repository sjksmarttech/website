#!/usr/bin/env bash
# Build the site and show how to host it on GitHub Pages.
#
# Run with bash (required). If you use `sh scripts/github-hosting.sh`, POSIX sh cannot parse
# BASH_SOURCE, [[ ... ]], or pipefail — we re-exec under bash automatically.
if [ -z "${BASH_VERSION:-}" ]; then
  exec env bash "$0" "$@"
fi

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
# Match https://USER.github.io/REPO/ so JS/CSS paths resolve (avoid blank GitHub Pages).
if [[ -z "${GITHUB_PAGES_BASE:-}" ]] && git remote get-url origin &>/dev/null; then
  _url="$(git remote get-url origin)"
  _repo="${_url%.git}"
  _repo="${_repo##*/}"
  if [[ -n "$_repo" && "$_repo" != "*" ]]; then
    export GITHUB_PAGES_BASE="/${_repo}/"
    echo "    Using GITHUB_PAGES_BASE=${GITHUB_PAGES_BASE} (from git remote)."
  fi
fi
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
       git remote add origin https://github.com/sjksmarttech/website.git
       git push -u origin main

     If the repo already exists and has a remote:

       git remote -v
       git push -u origin main

  3) Enable GitHub Pages — pick ONE:

     A) Site on a separate branch (main = code, gh-pages = built files):
        GitHub repo → Settings → Pages → Build and deployment
        → Source: "Deploy from a branch"
        → Branch: gh-pages, folder: / (root)
        Push this repo with .github/workflows/deploy-gh-pages.yml on main.
        Each push to main builds and updates gh-pages (see Actions tab).

     B) No publish branch — deploy only via Actions artifact:
        Settings → Pages → Source: "GitHub Actions"
        Use a workflow that uploads the dist artifact (not this project's
        gh-pages workflow).

  4) Custom domain (sjksmarttech.com):
       - public/CNAME already contains the hostname for Pages.
       - In repo Settings → Pages → Custom domain: sjksmarttech.com
       - At your DNS provider, add the records GitHub shows (A/AAAA or CNAME).
       - Wait for DNS; optionally enforce HTTPS in Pages settings.

  5) SPA routes: build copies index.html to dist/404.html so deep links work on Pages.

  GitHub Actions sets GITHUB_PAGES_BASE from the repo name (e.g. /website/) so
  https://USER.github.io/REPO/ loads JS/CSS correctly. If you use ONLY a custom
  domain at the site root, add repo Variable PAGES_BASE = / (Settings → Actions
  → Variables). Local ./scripts/github-hosting.sh infers /REPO/ from git remote.

STEPS

echo "-------------------------------------------------------------------"
echo " Build output: $ROOT/dist"
echo " Done."
echo ""
echo "Tip: Prefer  bash scripts/github-hosting.sh  or  npm run host:github"
echo "     If  npm run dev  errors on node_modules/.vite (ENOENT), run:"
echo "     rm -rf node_modules/.vite && npm run dev"
echo ""
