# Blaturi de Lemn Premium — site one-page

Site comercial pentru o firmă care lucrează lemn masiv la comandă: **debitări**
(taie bușteni în blaturi), **blaturi live-edge**, **mese din lemn masiv** și
**mese cu rășină epoxidică (river)**. Atelier în Bucovina, livrare în toată România.

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
| — | **Hero** | Foto blat pe tot ecranul + cele 4 servicii ca „chips" gold (sar în ochi), telefon gigant, CTA |
| 02 | **Blaturile noastre** | Galerie cu 4 blaturi/mese (poze reale ale clientului) |
| 03 | **Din pădure în atelier** | 2 fotografii: bușteanul întreg + slab-ul proaspăt debitat |
| 04 | **Ce facem** | 4 tile-uri: debitări · blaturi live-edge · mese lemn masiv · mese cu rășină |
| 05 | **De ce noi** | 4 dovezi: 15 ani · 100% lemn masiv · 4 servicii · 10 ani garanție |
| 06 | **Cum lucrăm** | 5 pași: ne spui → vii și alegi lemnul → ofertă → lucrăm → livrăm |
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

### 3. Servicii (ce face firma)
```ts
export const SERVICES = [
  { n: "01", title: "Debitări la comandă", body: "..." },
  { n: "02", title: "Blaturi live-edge", body: "..." },
  { n: "03", title: "Mese din lemn masiv", body: "..." },
  { n: "04", title: "Mese cu rășină epoxidică", body: "..." },
];
```
Aceleași 4 titluri apar și ca „chips" în hero (`HERO_TAGS`).

### 4. Blaturi (galeria de poze reale)
```ts
export const LUCRARI = [
  { id: 1, name: "Blat live-edge cu burl", loc: "Plop",
    year: "lemn masiv", sqm: "~3 m", image: "/blat-burl.jpg", alt: "...", featured: true },
  ...
];
export const ATELIER = [
  { image: "/atelier-bustean.jpg", title: "Bușteanul", body: "De aici pornește totul" },
  { image: "/atelier-slab.jpg",    title: "Tăiat în blat", body: "Slab gros, proaspăt debitat" },
];
```
Pozele sunt în `public/`. Adaugi un fișier nou acolo → referezi calea `/numefisier.jpg` în config.

### 5. Dovezi, proces, FAQ, acoperire
Toate sunt array-uri în config. Editezi textul → salvezi → `npm run dev` reîncarcă.

## Imagini

Fotografiile actuale sunt **poze reale ale clientului** (blaturile și bușteanul lui).
Pentru a adăuga sau înlocui:

1. Pune noua poză în `public/` și referează calea în `src/config.ts`.
2. Recomandare: hero/blaturi sub ~400KB, optimizează cu [squoosh.app](https://squoosh.app/).
   Pozele de telefon (1200×1600) merg foarte bine așa cum sunt.

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
    Hero.astro               ← foto cover + chips servicii + CTA telefon
    Lucrari.astro            ← 4 blaturi (galerie)
    Atelier.astro            ← 2 foto: buștean + slab debitat
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
  blat-burl.jpg              ← cover hero + blat featured
  blat-figura.jpg            ← blat featured
  blaturi-pereche-1.jpg, blaturi-pereche-2.jpg  ← blaturi în galerie
  atelier-bustean.jpg, atelier-slab.jpg         ← buștean + slab debitat
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
