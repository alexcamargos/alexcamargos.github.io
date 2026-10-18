# Alexsander Lopes Camargos | Portfolio V1

*A Data Science and Strategic Decision-Making portfolio built with modern software engineering practices.*

[![Angular](https://img.shields.io/badge/Angular-v21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/alexcamargos/alexcamargos.github.io/deploy.yml?branch=main&style=for-the-badge&label=Deploy)](https://github.com/alexcamargos/alexcamargos.github.io/actions)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## About

This project is my professional showcase as a **Data Scientist** and **Economist** focused on transforming data into actionable insights and strategic business solutions.

The original goal was to create a platform that not only listed my work but also demonstrated my skills in modern front-end development, attention to design, and the ability to build a pleasant user experience; transforming a simple portfolio into a software project in its own right.

**What started as a static HTML/JS site has evolved into a modern Single Page Application (SPA)**, leveraging Angular's cutting-edge features to deliver a performant, scalable, and maintainable codebase.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-alcamargos.com-brightgreen?style=for-the-badge)](https://alcamargos.com)

## Tech Stack

| Category              | Technology                                                    |
|-----------------------|---------------------------------------------------------------|
| **Core Framework**    | Angular v21 (Standalone Components, Signals, Control Flow)    |
| **Language**          | TypeScript 5.9                                                |
| **Styling**           | TailwindCSS v3.4 (Dark Mode via `class` strategy)             |
| **Internationalization** | @ngx-translate (EN / PT-BR)                                |
| **Testing**           | Vitest                                                        |
| **Build & Deploy**    | GitHub Actions + GitHub Pages                                 |

## Key Features

- **Optimized Performance** — Lazy Loading and tree-shaking for fast load times
- **Persistent Dark/Light Mode** — Theme preference saved in localStorage
- **Multi-language Support (i18n)** — Full English and Portuguese translations
- **Responsive & Mobile-First Design** — Seamless experience across all devices
- **Modern Angular Patterns** — Signals, `@if`/`@for` control flow, and `inject()`
- **Automated CI/CD** — One-push deployment to GitHub Pages

## Running Locally

### Prerequisites

- **Node.js** v20+ (LTS recommended) — [nodejs.org](https://nodejs.org/)
- **npm** v10+ (comes with Node.js)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/alexcamargos/alexcamargos.github.io.git

# Navigate to project directory
cd alexcamargos.github.io

# Install dependencies
npm install

# Start development server
npm start
```

Open your browser at `http://localhost:4200/` — the app will auto-reload on file changes.

### Build for Production

```bash
npm run build
```

Build artifacts are output to `./dist/alcamargos-portfolio/browser/`.

## Project Structure

```
src/
├── app/
│   ├── core/               # Core services, models, and singletons
│   │   ├── models/         # TypeScript interfaces and types
│   │   └── services/       # Shared services (theme, translation, etc.)
│   │
│   ├── components/         # Reusable UI components (dumb/presentational)
│   │   ├── header/         # Top navigation bar
│   │   ├── footer/         # Site footer
│   │   └── project-card/   # Project showcase cards
│   │
│   └── pages/              # Route-level components (smart/container)
│       └── home/           # Main landing page
│
├── assets/
│   └── i18n/               # Translation files (en.json, pt.json)
│
└── styles.scss             # Global styles and Tailwind imports
```

## Contact

I'm always looking to grow and connect with like-minded professionals. Feel free to reach out!

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:alexcamargos@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcamargos/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alexcamargos)

## Color Reference

| Color               | Hex                                                                |
|---------------------|:------------------------------------------------------------------:|
| Slate 950 (Dark BG) | ![#020617](https://placehold.co/10x10/020617/020617.png) `#020617` |
| Slate 900 (Primary) | ![#0f172a](https://placehold.co/10x10/0f172a/0f172a.png) `#0f172a` |
| Slate 800 (Surface) | ![#1e293b](https://placehold.co/10x10/1e293b/1e293b.png) `#1e293b` |
| Slate 400 (Muted)   | ![#94a3b8](https://placehold.co/10x10/94a3b8/94a3b8.png) `#94a3b8` |
| Slate 50 (Light BG) | ![#f8fafc](https://placehold.co/10x10/f8fafc/f8fafc.png) `#f8fafc` |
| Sky 700 (Accent)    | ![#0369a1](https://placehold.co/10x10/0369a1/0369a1.png) `#0369a1` |
| Sky 400 (Accent Lt) | ![#38bdf8](https://placehold.co/10x10/38bdf8/38bdf8.png) `#38bdf8` |
| Emerald 500 (Impact)| ![#10b981](https://placehold.co/10x10/10b981/10b981.png) `#10b981` |

## License

Copyright © 2022 - 2026 **Alexsander Lopes Camargos**

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/alexcamargos">Alexsander Camargos</a>
</p>
