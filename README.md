## My Portfolio (Next.js + craftz-style UI)

A clean, themeable portfolio with a 3D cat viewer, smooth section navigation, and a tiny “heart reaction” counter.

### Features
- Craftz-inspired look & feel (fonts, colors, glass UI)
- **Theme toggle** (class-based, no `prefers-color-scheme` dependency)
- **Interactive 3D cat** (`src/catnoodles.glb`) using Three.js + OrbitControls
- **Heart button** with a real counter stored in SQLite (`data/portfolio-hearts.sqlite`)
- Rocket “back to top” button in the footer

### Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion + Lucide icons
- Three.js (GLB viewer)
- SQLite (via `better-sqlite3`)
