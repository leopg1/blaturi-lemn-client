# Blaturi de Lemn Premium — site one-page

Site comercial pentru o firmă care produce blaturi din lemn masiv la comandă:
blaturi de bucătărie, blaturi butcher block, mese cu blat masiv / live-edge și
blaturi de baie. Esențe: stejar, frasin, nuc. Atelier în Bucovina, livrare în toată România.

**Stack:** Astro 5 · Tailwind v4 · TypeScript · static

## Pornire rapidă

```bash
npm install          # o singură dată
npm run dev          # http://127.0.0.1:4321
npm run build        # generează dist/
npm run preview      # servește dist/ pentru verificare
```

## Structura site-ului (9 secțiuni)

| # | Secțiune | Ce conține |
|---|---|---|
| — | **Hero** | Foto din atelier pe tot ecranul, telefon gigant gold, CTA „Sună-ne" + „Vezi lucrări" |
| 02 | **Lucrări** | Galerie cu 4 blaturi livrate (poze reale ale clientului) |
| 03 | **Atelier** | 4 fotografii verticale din procesul de producție (lemn → frezare → șlefuire → atelier) |
| 04 | **Servicii** | 4 tile-uri: blaturi bucătărie · butcher block · mese masiv/live-edge · blaturi baie |
| 05 | **De ce noi** | 4 dovezi: 15 ani · 100% lemn masiv · 3 esențe · 10 ani garanție |
| 06 | **Cum lucrăm** | 5 pași: ne spui → alegem lemnul → ofertă → lucrăm în atelier → livrăm/montăm |
| 07 | **Unde livrăm** | Marquee cu 18 orașe din toată țara |
| 08 | **Întrebări** | FAQ cu 8 răspunsuri (accordion) |
| 09 | **Contact** | Telefon mare + program + info |

Plus: navbar fix cu CTA „Sună-ne", footer slim, bar fix-jos pe mobil după 320px scroll.

## Ce înlocuiește clientul înainte de livrare

Aproape tot conținutul se schimbă **dintr-un singur fișier**: [src/config.ts](src/config.ts).

### 1. Numele firmei și datele de bază
```ts
export const SITE = {
  brand: "Blaturi de Lemn Premium",   // ← numele real
  city: "Suceava", county: "Suceava", // ← atelierul
  yearsExperience: 15, guaranteeYears: 10,
  ...
};
```

### 2. Numărul de telefon
```ts
export const PHONES = [
  { label: "Principal", value: "0745 332 118", tel: "+40745332118" }, // ← numărul real
];
```
> Numărul actual este un **placeholder** — înlocuiește-l cu cel al clientului.

### 3. Lucrări (4 blaturi cu poze reale)
```ts
export const LUCRARI = [
  { id: 1, name: "Blat insulă & masă, stejar masiv", loc: "Cluj-Napoca",
    year: "2025", sqm: "stejar · 4 cm", image: "/lucrare-1.jpg", alt: "...", featured: true },
  ...
];
```
Pozele sunt în `public/`. Adaugi un fișier nou acolo → referezi calea `/numefisier.jpg` în config.

### 4. Atelier (4 fotografii din producție)
```ts
export const ATELIER = [
  { image: "/atelier-1.jpg", title: "Șlefuire", body: "Finisaj fin, la mână" },
  ...
];
```
Recomandat: fotografii **verticale** (9:16), sub 200KB.

### 5. Servicii, dovezi, proces, FAQ, acoperire
Toate sunt array-uri în config. Editezi textul → salvezi → `npm run dev` reîncarcă.

## Imagini

Toate fotografiile actuale (hero, lucrări, atelier) sunt de pe [Pexels](https://www.pexels.com/)
(licență liberă, uz comercial fără atribuire). Ele sunt **placeholdere** — se înlocuiesc cu
fotografii reale ale blaturilor și atelierului clientului:

1. Pune noua poză în `public/` (ex: `public/lucrare-1.jpg`, `public/hero-blat.jpg`).
2. Recomandare: hero 1920×1080+ sub 500KB, lucrări 1400px sub 300KB, atelier vertical sub 200KB
   (optimizează cu [squoosh.app](https://squoosh.app/)).

## Logo & favicon

Logo-ul este SVG vectorial: [public/logo-blaturi.svg](public/logo-blaturi.svg) — emblemă cu trei
blaturi stivuite + wordmark „BLATURI DE LEMN / PREMIUM". Peste hero apare alb (siluetă), iar la
scroll afișează culorile reale (verde + gold). Favicon-ul ([public/favicon.svg](public/favicon.svg))
folosește același motiv. Înlocuiește-le dacă clientul are un logo propriu.

## Deploy

### Vercel (recomandat — zero config)
1. Push repo pe GitHub.
2. Conectează repo-ul pe [vercel.com/new](https://vercel.com/new).
3. Detectează automat Astro (vezi `vercel.json` pentru cache headers).
4. Click **Deploy** — gata în <1 minut.

### Hosting propriu (cPanel etc.)
`npm run build` → urcă conținutul `dist/` la root-ul domeniului via FTP.

## Structură fișiere

```
src/
  config.ts                  ← toate datele site-ului
  layouts/Layout.astro       ← shell HTML + meta + fonts
  pages/index.astro          ← single page, asamblează componente
  components/
    Nav.astro                ← header fix, transparent peste hero, solid la scroll
    Hero.astro               ← foto cover + CTA telefon
    Lucrari.astro            ← 4 blaturi livrate
    Atelier.astro            ← 4 fotografii verticale din producție
    Servicii.astro           ← 4 tile-uri cu icoane
    DeCeNoi.astro            ← 4 dovezi
    Proces.astro             ← 5 pași
    Acoperire.astro          ← marquee cu orașe
    FAQ.astro                ← accordion native <details>
    Contact.astro            ← telefon mare + info
    Footer.astro             ← copyright slim
    MobileStickyBar.astro    ← bar fix-jos cu telefon
    PhoneIcon.astro          ← icon reutilizabil
  styles/globals.css         ← tokens (forest + gold + cream) + animații reveal
public/
  logo-blaturi.svg           ← logo (înlocuibil)
  favicon.svg
  hero-blat.jpg              ← cover hero
  lucrare-1.jpg → lucrare-4.jpg  ← 4 blaturi livrate
  atelier-1.jpg → atelier-4.jpg  ← 4 fotografii din atelier
vercel.json                  ← config deploy + cache headers
```

## Sistem design

### Paleta (OKLCH — variabile CSS în `src/styles/globals.css`)

| Token | Culoare | Uz |
|---|---|---|
| `--color-paper` | Cream cald | Background dominant |
| `--color-ink` | Verde forest închis | Text principal |
| `--color-forest` | Verde forest | Accent text, hover |
| `--color-forest-deep` | Verde foarte închis | Secțiuni întunecate (Atelier, Contact) |
| `--color-gold` | Galben muștar cald | CTA, telefon, accent primar |
| `--color-wood` | Lemn cald | Accent secundar |

### Tipografie
- **Fraunces** (serif) — titluri, statistici
- **Inter** (sans) — body, label-uri
- **JetBrains Mono** — numere telefon, eyebrows

### Animații
Sistem `.reveal` cu IntersectionObserver care animează la scroll. Hero are animație separată de
entrance pe load. Toate respectă `prefers-reduced-motion`.
