# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start Vite dev server
bun run build    # Production build
bun run build:dev # Development build
bun run preview  # Preview production build
bun run lint     # ESLint
bun run format   # Prettier formatting
```

No test suite is configured.

## Architecture

**Freeman Corretora** is a static B2B marketing website for a São Paulo insurance brokerage. It has no backend, no API, and no dynamic data — all content is hardcoded in the page components.

**Stack**: React 19 + TypeScript, Vite 7, React Router v6, Tailwind CSS 4, Shadcn/ui (new-york style).

**Routing** is configured in `src/App.tsx` using React Router v6 `<BrowserRouter>`. Pages live in `src/pages/`:
- `Index.tsx` — Home (hero, stats, service preview, partners, CTA)
- `Servicos.tsx` — Services (8 service cards, 4-step process)
- `Sobre.tsx` — About (company story, values, timeline)
- `Contato.tsx` — Contact (info + form via `mailto:` link, map embed)
- `NotFound.tsx` — 404 catch-all

**Layout**: Every page renders inside `SiteLayout` (header + main + footer + WhatsApp FAB). The layout components are in `src/components/layout/`.

**Shadcn/ui** components live in `src/components/ui/` — use them freely for new UI elements.

**Path alias**: `@/*` maps to `src/*`.

**Entry point**: `index.html` → `src/main.tsx` → `src/App.tsx` (standard Vite SPA).

## Brand & Styling

Custom Tailwind theme tokens (defined in `src/styles.css` `@theme` block):

| Token | Value | Use |
|-------|-------|-----|
| `--navy` | `#212543` | Primary brand (header, footer, CTAs) |
| `--navy-medium` | `#333967` | Secondary navy |
| `--graphite` | `#3b3f47` | Body text |
| `--offwhite` | `#fdfdfd` | Light backgrounds |
| `--surface-soft` | `#f8f9fa` | Card backgrounds |
| `--accent-red` | `#c83d3d` | Destructive/warning accents |
| `--whatsapp` | `#8cef7d` | WhatsApp FAB color |

**Prettier config** (`.prettierrc`): `printWidth: 100`, `semi: true`, double quotes, trailing commas.

## Contact Details (currently placeholders)

All contact info is hardcoded — no env vars. When updating to real values, search for:
- Phone: `+55 (13) 0000-0000`
- WhatsApp URL: `https://wa.me/5513000000000`
- Email: `contato@freemancorretora.com.br`
- Address: `Av. Ana Costa, 000 — Gonzaga, Santos/SP`
- CNPJ: `00.000.000/0001-00`
