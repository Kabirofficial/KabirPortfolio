# Kabir Thayani // PortfolioRedesign

A professional, typography-first, minimalist web developer portfolio. Built with a sophisticated **editorial agency aesthetic** (reminiscent of Linear.app and editorial tech newsletters), prioritizing content structure, crisp details, and snappy transition interactions.

## 🛠 Tech Stack

*   **Frontend**: React (Functional Components & Hooks)
*   **Styling**: Tailwind CSS v4 (Pure utility classes)
*   **Build Tool**: Vite (Rolldown environment integration)
*   **Animations**: Framer Motion (Snappy micro-interactions)
*   **Smooth Scroll**: Lenis Scroll

---

## 🎨 Design Principles

*   **Editorial & Sophisticated**: Uses high-contrast typography, tight heading tracking, and generous, structured margins.
*   **Minimal & Solid**: Replaces flashy background blobs, neon gradients, and floating glass cards with clean outline borders (`border-zinc-200` / `border-zinc-800`) and solid muted canvases.
*   **Theme-Aware Colors**:
    *   **Dark Theme**: Solid deep charcoal (`bg-[#0e0e11]`) canvas with zinc text.
    *   **Light Theme**: Soft off-white/cream (`bg-[#fafaf9]`) canvas with charcoal text.
*   **Snappy Interactions**: Hover micro-interactions use instant, crisp durations (`transition-all duration-200 ease-out`).

---

## 📂 Project Structure

```
├── .github/workflows/   # CI/CD Action workflows (Linting & Build check)
├── public/              # Static assets (resume, logos, sitemap templates)
├── scripts/             # Build scripts (sitemap generator)
└── src/
    ├── components/      # Common UI components (Navbar, Footer, Timeline, Clock)
    │   └── ui/          # Low-level primitives & Icons
    ├── context/         # React Contexts (ThemeContext)
    ├── data/            # Local data files (experience, education, projects)
    ├── pages/           # Pages (Home, About, Projects, Contact, Error, 404)
    ├── utils/           # Helper scripts (constants, hooks)
    ├── App.jsx          # Main application wrapper
    ├── index.css        # Tailwind directives and customized typography
    └── main.jsx         # App mounting entry point
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally (Dev Server)
```bash
npm run dev
```

### 3. Compile Production Bundle
```bash
npm run build
```
*Note: Building compiles the client-side SPA into `/dist` and automatically triggers the script at `scripts/generate-sitemap.js` to refresh the sitemap.*

---

## ⚡ Deployment

### Vercel Ready
The project is configured for deployment to **Vercel** via `vercel.json`. It includes SPA rewrite rules to ensure client-side routing handles direct URL reloads correctly:

*   **Vercel Settings**:
    *   Framework Preset: `Vite`
    *   Output Directory: `dist`
    *   Build Command: `npm run build`

### GitHub Ready
The project includes a **GitHub Actions CI workflow** located in `.github/workflows/ci.yml`. On every `push` or `pull_request` to the `main` branch, it automatically runs:
1. Auditing checks and fresh package installs (`npm ci`).
2. ESLint checks (`npm run lint`).
3. Production compilation (`npm run build`).
