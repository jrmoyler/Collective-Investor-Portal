# AGENTS.md

## Cursor Cloud specific instructions

### Codebase overview

This repository contains a **pre-built static React SPA** (Collective AI — Investor Intelligence & Outreach Dashboard). There is no source code, no `package.json`, no build tooling, and no tests — only production-ready bundled artifacts:

- `Collective AI — Investor Intelligence Dashboard/index.html` — entry point
- `Collective AI — Investor Intelligence Dashboard/assets/index-BZEFpGaW.js` — minified JS bundle (React 18, Vite build, Tailwind CSS, shadcn/ui, Recharts, TanStack Query)
- `Collective AI — Investor Intelligence Dashboard/assets/index-BOQ3aSqQ.css` — minified CSS bundle

### Running the application

Serve the static files with any HTTP server. Example:

```sh
npx serve "Collective AI — Investor Intelligence Dashboard" -l 5173 -s
```

The `-s` flag enables SPA mode (rewrites all routes to `index.html`). The app will be available at `http://localhost:5173/`.

### Key caveats

- **No lint, test, or build commands exist** — the repo has no `package.json` or source code.
- The JS bundle references a backend API on port 5000, but the backend code is **not included** in this repo. The dashboard renders and is interactive without it (investor data is hardcoded in the bundle), but data-fetching mutations will fail.
- The directory name contains special characters (em dash `—`). Always wrap the path in quotes when using shell commands.
