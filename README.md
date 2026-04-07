# Collective AI — Investor Intelligence Portal

An interactive investor intelligence dashboard for Collective AI, Columbus, Ohio's AI venture studio. Track, research, score, and engage 27 VC firms across AI, fintech, health-tech, robotics, and adjacent emerging technology sectors.

## Features

- **Discovery Grid** — Visual card-based investor view with 6-dimensional scoring
- **Tracker Table** — Sortable spreadsheet with all metrics and contact info
- **Priority Board** — Strategic categorization (Best to Contact, Warm Intros, Recent Activity)
- **Kanban Pipeline** — Drag-and-drop pipeline stages from Unresearched to Potential Investment
- **Research Terminal** — CLI-style interface for querying investor data
- **Email Console** — Draft and send outreach emails to investors
- **Investor Map** — Visual department-investor relationship graph

## Scoring Dimensions

Each investor is scored (0–100) across six dimensions:

| Score | Description |
|-------|-------------|
| **Fit Score** | Overall thesis and portfolio alignment |
| **AI Score** | Depth of AI/ML investment activity |
| **Columbus Score** | Strength of Ohio/Columbus geographic connection |
| **Check Alignment** | Check size compatibility with Collective AI needs |
| **Recent Activity** | Volume and recency of deal activity |
| **Outreach Readiness** | Actionability of outreach based on warm intros and thesis fit |

## Local Development

```bash
npm install
npm run dev
# Dashboard available at http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect `vercel.json` — no additional config needed
4. Deploy

The `vercel.json` configures:
- Static files served from `public/`
- API routes as serverless functions from `api/`
- SPA fallback routing
- CORS headers for API endpoints
- Immutable caching for hashed static assets

## Architecture

```
├── api/                    # Vercel serverless functions + local dev server
│   ├── data/
│   │   └── investors.json  # 27 investors with full scoring and intelligence
│   ├── investors.js        # GET /api/investors
│   ├── investors/[id].js   # GET/PATCH /api/investors/:id
│   ├── stats.js            # GET /api/stats
│   ├── events.js           # GET/POST /api/events
│   ├── emails.js           # GET/POST /api/emails
│   ├── research.js         # GET/POST /api/research
│   └── server.js           # Express dev server
├── public/                 # Static SPA files (served by Vercel)
│   ├── index.html
│   └── assets/
│       ├── index-BZEFpGaW.js
│       └── index-BOQ3aSqQ.css
├── vercel.json             # Vercel deployment configuration
└── package.json
```

## Departments (Collective AI Divisions)

| Department | Focus |
|------------|-------|
| ZenFlow | AI infrastructure, agentic systems |
| The Collective | AI consulting, enterprise services |
| Hybrid Living | Education-tech, workforce enablement |
| Nexus Labs | Media-tech, content infrastructure |
| Kinetic Edge | Sports-tech, athlete optimization |
| Quantum Ledger | Fintech, web3, financial intelligence |
| Terra Axis | Proptech, smart real estate |
| Binary Loom | Cloud infrastructure, dev tools |
| Vector Shift | Autonomous logistics, mobility |
| Aether Link | Connectivity, communications |
| Obsidian Arc | Cybersecurity, defense-adjacent |
| Civic Core | Nonprofit infrastructure, civic tech |
| Vital Helix | Health-tech, bio-intelligence |
| Gaia Synthesis | Climate-tech, agri-tech |
| Animus Prime | Robotics, embodied AI |
