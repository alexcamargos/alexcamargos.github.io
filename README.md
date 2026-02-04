# Alexandre Camargos | Portfolio V1

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

| Color          | Hex                                                                |
|----------------|:------------------------------------------------------------------:|
| Navy           | ![#0a192f](https://placehold.co/10x10/0a192f/0a192f.png) `#0a192f` |
| Light Navy     | ![#112240](https://placehold.co/10x10/112240/112240.png) `#112240` |
| Lightest Navy  | ![#233554](https://placehold.co/10x10/233554/233554.png) `#233554` |
| Slate          | ![#8892b0](https://placehold.co/10x10/8892b0/8892b0.png) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://placehold.co/10x10/a8b2d1/a8b2d1.png) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://placehold.co/10x10/ccd6f6/ccd6f6.png) `#ccd6f6` |
| White          | ![#e6f1ff](https://placehold.co/10x10/e6f1ff/e6f1ff.png) `#e6f1ff` |
| Green Accent   | ![#64ffda](https://placehold.co/10x10/64ffda/64ffda.png) `#64ffda` |

## License

Copyright © 2022 - 2026 **Alexsander Lopes Camargos**

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/alexcamargos">Alexsander Camargos</a>
</p>
