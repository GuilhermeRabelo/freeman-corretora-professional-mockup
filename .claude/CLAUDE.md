# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run build:dev # Development build
npm run preview   # Preview production build
npm run lint      # ESLint
npm run format    # Prettier formatting
```

No test suite is configured.

## Architecture

**Freeman Corretora** is a static B2B marketing website for a São Paulo insurance brokerage. It has no backend, no API, and no dynamic data — all content is hardcoded in the page components.

**Stack**: React 19 + TypeScript, Vite 7, React Router v7, Tailwind CSS 4.

**Routing** is configured in `src/App.tsx` using React Router v7 `<BrowserRouter>`. Routes stay in Portuguese (`/servicos`, `/sobre`, `/contato`) but the page files themselves are named in English, in `src/pages/`:

- `Index.tsx` — Home (hero, stats, service preview, partners, CTA)
- `Services.tsx` — Services (8 service cards, 4-step process)
- `About.tsx` — About (company story, values, timeline)
- `Contact.tsx` — Contact (info + form via `mailto:` link, map embed)
- `NotFound.tsx` — 404 catch-all

**Layout**: Every page renders inside `SiteLayout` (header + main + footer + WhatsApp FAB). The layout components are in `src/components/layout/`.

**No shadcn/ui** — it was removed as unused dead code; UI elements are hand-built with Tailwind, icons come from `lucide-react`.

**Path alias**: `@/*` maps to `src/*`.

**Entry point**: `index.html` → `src/main.tsx` → `src/App.tsx` (standard Vite SPA).

## Brand & Styling

Custom Tailwind theme tokens (defined in `src/styles.css` `@theme` block):

| Token            | Value     | Use                                  |
| ---------------- | --------- | ------------------------------------ |
| `--navy`         | `#212543` | Primary brand (header, footer, CTAs) |
| `--navy-medium`  | `#333967` | Secondary navy                       |
| `--graphite`     | `#3b3f47` | Body text                            |
| `--offwhite`     | `#fdfdfd` | Light backgrounds                    |
| `--surface-soft` | `#f8f9fa` | Card backgrounds                     |
| `--accent-red`   | `#c83d3d` | Destructive/warning accents          |
| `--whatsapp`     | `#8cef7d` | WhatsApp FAB color                   |

**Prettier config** (`.prettierrc`): `printWidth: 100`, `semi: true`, double quotes, trailing commas.

## Contact Details (currently placeholders)

All contact info is hardcoded — no env vars. When updating to real values, search for:

- Phone: `+55 (13) 0000-0000` (`Contact.tsx`, `SiteFooter.tsx`)
- WhatsApp URL: `https://wa.me/5513000000000` (`Contact.tsx`, `WhatsappFab.tsx`)
- Email: `contato@freemancorretora.com.br` (`Contact.tsx` ×2, `SiteFooter.tsx`)
- **Address — inconsistent, two different placeholders in use, both need updating:**
  - `Contact.tsx`: `Av. Senador Feijó, 686 — Sala 1525, Santos/SP`
  - `SiteFooter.tsx`: `Av. Ana Costa, 000 — Gonzaga, Santos/SP — CEP 11060-000`
- CNPJ/SUSEP: only in `SiteFooter.tsx` — `SUSEP nº 00000000 · CNPJ 36.756.226/0001-64`. Not referenced anywhere else.
