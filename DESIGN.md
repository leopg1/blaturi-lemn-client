# Design

> Sistem seed — pre-implementare. Se va rafina după ce există cod și fotografia reală a clientului. Generat pe baza PRODUCT.md.

## Visual Theme

**Atelier de lemn.** Light theme dominant, cu cream cald ca pânză și un accent gold care semnalează acțiunea. Senzația vizuală vine de la doi poli: hârtia (background neutru, ușor de citit) și materialul (textura lemnului — stejar, frasin, nuc — și verdele forest folosite cu măsură). Fără gradient-uri SaaS, fără sticlă, fără neon. Tipografia poartă personalitatea — un serif modern cu structură pentru titluri (autoritate, dar nu corporate), pereche cu un sans neutru pentru body.

**Scene sentence:** *Cineva care își renovează bucătăria, de 40 de ani, deschide site-ul pe telefon seara, vrea să vadă în 5 secunde că e lemn masiv adevărat, cum arată finit și pe cine sună pentru o ofertă.*

→ Forțează **light theme**, contrast puternic, tipografie generoasă, telefon vizibil din prima.

## Color Strategy

**Committed** — un singur accent (clay / pământ ars) duce identitatea. Apare pe CTA-urile principale, numere de telefon highlight, ancoring vizual pentru secțiuni. Acoperă ~15–20% din suprafață. Restul e cuplajul neutru cald (off-white + graphite warm).

## Color Palette

| Rol | Token | OKLCH | Hex aprox | Uz |
|---|---|---|---|---|
| Surface / Paper | `--paper` | `oklch(98% 0.005 60)` | `#FAF8F4` | Background dominant |
| Surface alt | `--paper-2` | `oklch(95% 0.008 60)` | `#F2EDE5` | Card de fundal, secțiuni alternate |
| Ink | `--ink` | `oklch(20% 0.015 50)` | `#1F1B16` | Text principal, titluri |
| Ink muted | `--ink-2` | `oklch(38% 0.012 50)` | `#4A4239` | Body secundar, label-uri |
| Ink soft | `--ink-3` | `oklch(58% 0.008 50)` | `#8B8174` | Meta, captions |
| Accent (Clay) | `--clay` | `oklch(56% 0.13 38)` | `#B85A2B` | CTA primary, phone highlight, ancore |
| Accent hover | `--clay-hi` | `oklch(50% 0.14 38)` | `#A24A1F` | Hover/active state |
| Accent soft | `--clay-soft` | `oklch(92% 0.04 50)` | `#F2DDC9` | Background blocuri accent |
| Forest (sec) | `--forest` | `oklch(40% 0.06 145)` | `#3D584A` | Foișoare/lemn, rar folosit |
| Border | `--rule` | `oklch(88% 0.01 50)` | `#DDD5C9` | Linii de încadrare |

Niciodată `#fff` sau `#000`. Toate neutrele au chroma 0.005–0.015 spre 50–60° (warm).

## Typography

**Display:** `Fraunces` (variable, OFL) — serif modern cu opsz și grad, sentiment de pres-bun cărbune, încredere fără să devină pompous. Folosit la headline-uri mari (h1, hero, secțiuni). Pondere 400–600 cu opsz dinamic la dimensiune.

**Body:** `Inter` sau `Geist Sans` (alegere finală la implementare) — sans neutru, lizibil, citește bine pe orice ecran.

**Mono (accent rar):** `JetBrains Mono` sau `Geist Mono` pentru: numere de telefon, an de fondare, contoare („8 ani · toată România"), label-uri tehnice pe specificații.

### Scală tipografică

| Step | Size (rem) | Line height | Uz |
|---|---|---|---|
| Display XL | 5.5 | 1.02 | Hero h1 (desktop) |
| Display L | 3.5 | 1.05 | Section h2 |
| Display M | 2.25 | 1.1 | Sub-section h3 |
| Body L | 1.25 | 1.5 | Lead paragraphs |
| Body M | 1 | 1.6 | Body default (16px) |
| Body S | 0.875 | 1.5 | Meta, captions |
| Mono | 0.875 | 1.4 | Numere telefon (mare), labels |

Pe mobil, scala se comprimă: Display XL → 3rem, Display L → 2.25rem.

Cap line length la 65ch pentru body.

## Layout

- **Container max-width:** 1280px desktop, 640px reading body.
- **Gutter:** 24px mobile, 48–80px desktop.
- **Vertical rhythm:** secțiuni mari, padding-block 96–160px desktop, 64–96px mobile.
- **Grid:** 12 col desktop, 4 col mobile. Asimetric când e justificat (hero text 7 col + photo 5 col).
- **Nu** wrap-uri în cards uniforme. Fotografia respiră peste lățime, textul are coloană fixă.

## Components

- **Phone block:** tipografie mare mono pentru număr, label deasupra, tap-to-call pe mobil. Nu buton mic ascuns.
- **Lucrare card:** fotografie raw (fără overlay greu), label sub: localitate · tip · suprafață. Hover: zoom subtil al imaginii (transform).
- **Service tile:** numerotat (01–06), serif mare, descriere scurtă, link „Vezi lucrări". Nu icon SaaS generic.
- **Process step:** layout asimetric stânga/dreapta alternativ, număr mare în background.
- **FAQ:** deschise by default (nu collapsed) sau accordion cu cel puțin primul deschis.
- **Form contact:** scurt — nume, telefon, ce vrei (blat bucătărie / masă / baie), dimensiuni. Max 4 câmpuri.

## Motion

- Curbe: `ease-out-quart` și `ease-out-expo`. Niciodată bounce sau elastic.
- Durate: 200–400ms pentru micro-interacțiuni, 600–800ms pentru reveal-uri.
- Reveal pe scroll: subtle fade + 8–12px translateY. Niciodată stagger excesiv.
- Telefon icon: pulse foarte subtil pe mobile sticky CTA (durată 2s, opacity only).
- Respect `prefers-reduced-motion`: oprește tot ce nu e esențial.

## Distinctive Visual Moves

Notă pentru implementare — moves care diferențiază de reper:

1. **Telefon ca semnal vizual gigant** în hero (mono mare, clay) — nu buton secundar.
2. **„15 — Ani în lemn" / „3 — Esențe" / „RO — Toată țara"** — un ledger numerat, mono, ca un index de atelier.
3. **Fotografie raw, nu tratată cu filtre** — încredere prin autenticitate (lemnul real, atelierul real).
4. **Sticky bottom bar pe mobil** cu numărul mare, mereu vizibil.
5. **Listă lucrări ca „blaturi livrate"** — numerotat, esență, dimensiune, localitate.
6. **Marquee discret cu „Galați · Brașov · Iași · Cluj · București..."** — semnalează acoperirea națională ca dovadă vizuală.
