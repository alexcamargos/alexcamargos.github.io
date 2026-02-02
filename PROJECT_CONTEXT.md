# AGENT CONTEXT: PROJECT "INSIGHT ENGINE"

VOCÊ ESTÁ ATUANDO COMO: Senior Angular Architect & UI Designer.
OBJETIVO: Transformar este repositório (atualmente contendo um site HTML legado em /legacy_v0) em um Portfólio Angular v18+ moderno e de alta performance.

## 1. REGRAS TÉCNICAS (HARD CONSTRAINTS)
- **Framework:** Angular v18+ (Obrigatório uso de Standalone Components).
- **Estilização:** TailwindCSS v3.4+ (Configurado via npm install -D tailwindcss postcss autoprefixer).
- **Gerenciamento de Estado:** Angular Signals (evite RxJS complexo para estados simples).
- **Internacionalização:** @ngx-translate/core (Padrão: Inglês, Fallback: Português).
- **Deploy Target:** GitHub Pages (docs/ ou gh-pages branch).

## 2. IDENTIDADE VISUAL (DESIGN SYSTEM)
- **Tema:** Suporte nativo a Dark/Light mode (via classe .dark no HTML tag).
- **Tipografia:** 'Inter' ou 'Plus Jakarta Sans' (Google Fonts).
- **Cores (Tailwind):**
  - Primary: Slate-900 (Light) / Slate-50 (Dark)
  - Accent: Sky-700 (Light) / Sky-400 (Dark)
  - Surface: White (Light) / Slate-900 (Dark)

## 3. ESTRUTURA DE ARQUIVOS ALVO
src/app/
├── core/           # Singleton services (ThemeService, TranslationService)
├── components/     # UI Kits (Buttons, Cards, Header, Footer)
├── pages/          # Rotas (Home, Projects, About)
└── assets/i18n/    # en.json, pt.json

## 4. DIRETRIZES DE MIGRAÇÃO DE CONTEÚDO
- LEIA os arquivos em `./legacy_v0/` para entender o perfil do Alexsandre.
- EXTRAIA textos, links sociais e descrições de projetos antigos.
- REESCREVA o conteúdo para um tom "Senior Data Scientist" (foco em impacto de negócio, não apenas código).
