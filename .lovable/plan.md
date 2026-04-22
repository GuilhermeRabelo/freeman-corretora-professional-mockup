
# Freeman Corretora — Corporate Website

A sober, credibility-first B2B insurance brokerage site in Brazilian Portuguese, built across four dedicated routes with shared header/footer, sticky WhatsApp CTA, and the Freeman shield branding throughout.

## Brand system
- **Colors**: Navy `#212543` (primary), Medium navy `#333967`, Graphite `#3b3f47` (body), Light gray `#bfbfbf` (dividers), Off-white `#fdfdfd`, WhatsApp green `#8cef7d`, Accent red `#c83d3d` (sparingly).
- **Type**: Changa One for H1–H3 (display); Montserrat (Regular/Semibold/Black) for body, labels, numerals — both via Google Fonts.
- **Style**: Flat, 4px radius, crisp 1px borders, no heavy shadows, generous whitespace.
- **Logos**: Dark-blue shield on white surfaces, white shield on navy surfaces, oversized shield used as subtle watermark in hero/transition sections.

## Shared layout
- **Header**: White, sticky, 1px bottom divider. Left: Freeman shield + wordmark. Right: nav (`Home`, `Sobre`, `Serviços`, `Contato`) using TanStack `Link` with active state, plus a navy "Solicitar Cotação" button. Mobile: hamburger sheet.
- **Footer**: Navy background, white shield logo, brief institutional blurb, columns for Navegação / Contato / Endereço, partner insurer mini-row, fine-print copyright.
- **Floating WhatsApp button**: Bottom-right, green circle, opens `https://wa.me/<placeholder>` in new tab. Visible on every page.

## 1. Home (`/`)
- **Hero** (navy, min-h-[80vh], 50/50): H1 "Proteção sólida para empresas que não podem parar.", subtitle (35 anos…), primary white button "Solicitar Cotação" + ghost "Nossos Serviços". Right side: corporate photo with 20% navy overlay; oversized white shield watermark anchored bottom-right.
- **Trust bar** (white, 4 cols with vertical dividers): `35+ Anos de Mercado`, `500+ Empresas Atendidas`, `100% Apólices Personalizadas`, `24h Atendimento Dedicado`.
- **Services preview** (light gray `#f8f9fa`): centered "Soluções Corporativas" header + 4 bordered cards (Patrimonial, Frota, Vida em Grupo, Responsabilidade Civil) with thin-line navy icons, brief copy, "Saiba mais →" link, hover lift.
- **Partner insurers banner**: grayscale logo strip (Porto, Allianz, Tokio Marine, Bradesco, SulAmérica, Mapfre placeholders) → color on hover.
- **Bottom CTA strip** (medium navy): "Pronto para proteger seu negócio?" + white button.

## 2. Sobre (`/sobre`)
- **Internal hero**: medium navy, centered "Sobre a Freeman" + "Tradição, Ética e Foco em Resultados."
- **Institutional split**: B&W corporate photo (sharp geometric border) | red tagline "35 anos de história.", H2 "Entendemos o risco para proteger o seu sucesso.", 2–3 paragraphs on B2B consultative approach.
- **Values** (navy, 3 cols, transparent cards, white line icons): Transparência Absoluta, Expertise Técnica, Foco no Cliente.
- **Mini timeline** (white): 4 milestones (1989 fundação → 2025) as horizontal markers.

## 3. Serviços (`/servicos`)
- **Internal hero**: same structure, H1 "Nossas Especialidades".
- **Detailed grid** (white, 2 cols): horizontal cards — left navy square w/ white geometric icon, right H3 + description + outline navy "Solicitar Cotação". Services: Riscos de Engenharia, D&O, Patrimonial Empresarial, Frota & Auto Empresarial, Vida em Grupo, Responsabilidade Civil, Garantia, Transportes.
- **Process strip** (light gray): 4-step "Como trabalhamos" (Diagnóstico → Cotação → Contratação → Sinistro).
- **Bottom CTA banner** (medium navy): "Não encontrou o que procura?…" + solid white button.

## 4. Contato (`/contato`)
- No hero. Direct split layout on white.
- **Left (info)**: H1 "Vamos conversar sobre a proteção do seu negócio.", supporting graphite text. Icon+text blocks for endereço (Santos, SP), telefone, e-mail, horário. Large green WhatsApp CTA button.
- **Right (form)**: off-white card, light gray border, flat. Fields: Nome Completo, Empresa (CNPJ), Cargo, Telefone Comercial, E-mail Corporativo, Seguro de Interesse (select), Mensagem (textarea). Navy focus ring. Submit opens `mailto:` with prefilled subject/body (frontend-only, per your choice).
- **Map placeholder strip** below (subtle, optional simple embed iframe to Santos).

## SEO & metadata
Each route gets its own `head()` with PT-BR title, description, og:title, og:description (e.g., "Freeman Corretora — Seguros Corporativos em Santos/SP"). Hero image used as og:image on Home; about photo on Sobre.

## Out of scope (placeholders)
Real WhatsApp/phone/address, partner logos, and team photos use clearly marked placeholders editable via Visual Edits later.
