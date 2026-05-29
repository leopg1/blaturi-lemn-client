// Site-wide content. Schimbă valorile de aici și se actualizează în tot site-ul.

export const SITE = {
  brand: "Blaturi de Lemn Premium",
  brandMark: "BLP",
  tagline: "blaturi din lemn masiv, lucrate la comandă",
  logo: "/logo-blaturi.svg",
  yearsExperience: 15,
  guaranteeYears: 10,
  city: "Suceava",
  county: "Suceava",
  coverage: "livrăm în toată România",
  hoursLabel: "Răspundem la orice oră",
} as const;

export const PHONES = [
  { label: "Principal", value: "0745 332 118", tel: "+40745332118" },
] as const;

// Acoperire — orașe în care livrăm, afișate în marquee
export const COVERAGE_LOCATIONS = [
  "Suceava", "București", "Cluj-Napoca", "Timișoara", "Iași", "Brașov",
  "Constanța", "Oradea", "Sibiu", "Craiova", "Galați", "Bacău",
  "Arad", "Ploiești", "Pitești", "Baia Mare", "Târgu Mureș", "Botoșani",
] as const;

// Servicii — 4 categorii de blaturi din lemn masiv
export const SERVICES = [
  {
    n: "01",
    title: "Blaturi de bucătărie",
    body:
      "Lemn masiv lamelar sau cherestea integrală — stejar, frasin, nuc. Decupaje pentru chiuvetă și plită, finisaj cu ulei sigur la alimente.",
  },
  {
    n: "02",
    title: "Blaturi butcher block",
    body:
      "Capăt de fibră (end-grain), pentru tocat zilnic. Rezistente, ușor de reîmprospătat, model de șah care nu se uzează la lamă.",
  },
  {
    n: "03",
    title: "Mese cu blat masiv & live-edge",
    body:
      "Mese de living și dining cu margine naturală (live-edge) sau muchie dreaptă. Picioare din lemn sau metal, la alegere.",
  },
  {
    n: "04",
    title: "Blaturi de baie & glafuri",
    body:
      "Blaturi pentru lavoar, polițe, glafuri de fereastră, trepte. La dimensiunea ta, tratate să reziste la umiditate.",
  },
] as const;

// Lucrări — blaturi livrate (fotografii cu lucrările realizate)
export const LUCRARI = [
  {
    id: 1,
    name: "Blat insulă & masă, stejar masiv",
    loc: "Cluj-Napoca",
    year: "2025",
    sqm: "stejar · 4 cm",
    image: "/lucrare-1.jpg",
    alt: "Blat masiv din stejar pe insulă de bucătărie și masă, finisat cu ulei natural",
    featured: true,
  },
  {
    id: 2,
    name: "Blat bucătărie, frasin lamelar",
    loc: "Brașov",
    year: "2025",
    sqm: "frasin · 3 cm",
    image: "/lucrare-2.jpg",
    alt: "Blat de bucătărie din frasin lamelar, bucătărie albă cu accente de lemn deschis",
    featured: true,
  },
  {
    id: 3,
    name: "Blat insulă cu chiuvetă, stejar",
    loc: "București",
    year: "2025",
    sqm: "stejar · 4 cm",
    image: "/lucrare-3.jpg",
    alt: "Blat de insulă din stejar cu decupaj pentru chiuvetă și baterie",
  },
  {
    id: 4,
    name: "Blat bucătărie & tocător, stejar uleiat",
    loc: "Suceava",
    year: "2024",
    sqm: "stejar · 3,8 cm",
    image: "/lucrare-4.jpg",
    alt: "Blat de bucătărie din stejar uleiat, lumină caldă și tocător de lemn",
  },
] as const;

// Atelier — fotografii reale din timpul lucrului (de la scândură la blat finisat)
export const ATELIER = [
  {
    image: "/atelier-3.jpg",
    title: "Lemn selectat",
    body: "Stejar, frasin, nuc",
  },
  {
    image: "/atelier-2.jpg",
    title: "Frezare",
    body: "Profil curat pe muchie",
  },
  {
    image: "/atelier-1.jpg",
    title: "Șlefuire",
    body: "Finisaj fin, la mână",
  },
  {
    image: "/atelier-4.jpg",
    title: "Atelier propriu",
    body: "Totul sub același acoperiș",
  },
] as const;

// De ce noi — 4 dovezi
export const DOVEZI = [
  { num: "15", unit: "ani", label: "Lucrăm lemnul, zi de zi" },
  { num: "100%", unit: "", label: "Lemn masiv — zero pal sau MDF" },
  { num: "3", unit: "esențe", label: "Stejar, frasin și nuc, la alegere" },
  { num: "10", unit: "ani", label: "Garanție scrisă pe blat" },
] as const;

// Proces — 5 pași (limbaj simplu, voce de meseriaș)
export const PROCES = [
  {
    n: "01",
    t: "Ne spui ce vrei",
    b: "Dimensiuni, esența lemnului, finisaj. Trimite o poză sau o schiță pe WhatsApp — îți spun pe loc dacă se poate și cam pe ce preț."
  },
  {
    n: "02",
    t: "Alegem lemnul împreună",
    b: "Stejar, frasin sau nuc. Îți arăt scânduri reale, cu noduri și fibră, ca să știi exact cum o să arate blatul tău — nu poze de pe net."
  },
  {
    n: "03",
    t: "Ofertă scrisă, fermă",
    b: "Primești pe hârtie esența, grosimea, finisajul, dimensiunile și termenul. Prețul de pe ofertă e prețul pe care îl plătești la livrare."
  },
  {
    n: "04",
    t: "Lucrăm blatul în atelier",
    b: "Croit, încleiat, calibrat, șlefuit și uleiat la noi în atelier. Îți trimit poze din timpul lucrului ca să vezi cum prinde formă."
  },
  {
    n: "05",
    t: "Livrăm și montăm",
    b: "Ambalat cu grijă și livrat în toată țara. Montaj la tine acasă, dacă vrei. Garanție scrisă pe finisaj — nu vorbe, hârtie."
  },
] as const;

// FAQ — întrebări des puse, răspunsuri scurte și directe
export const FAQ = [
  {
    q: "Cât costă un blat din lemn masiv?",
    a: "Depinde de esență, grosime și dimensiuni. Un blat de bucătărie din stejar lamelar de 4 cm, uleiat, pornește în jur de 1.200 lei/m². Frasinul e similar, nucul mai scump. Trimite cotele, primești ofertă exactă — estimarea e gratuită.",
  },
  {
    q: "Ce esențe de lemn folosiți?",
    a: "Stejar, frasin și nuc european, lemn masiv uscat corect, la 8–10% umiditate. Pentru alte esențe (paltin, cireș) — întreabă, de obicei se poate aduce la comandă.",
  },
  {
    q: "Cât durează până primesc blatul?",
    a: "De obicei 2–3 săptămâni de la confirmarea ofertei și a avansului. În sezon plin poate ajunge la 4. Termenul exact e scris în ofertă, nu îl aflu pe parcurs.",
  },
  {
    q: "Cu ce se finisează blatul? Pot tăia direct pe el?",
    a: "Finisez cu ulei-ceară natural, sigur la contactul cu alimentele. Pe blat poți tăia, dar îți recomand un tocător ca să protejezi lama. Se reîmprospătează cu ulei o dată pe an — îți dau eu kitul și îți arăt cum.",
  },
  {
    q: "Livrați în toată țara?",
    a: "Da. Ambalez blatul în folie și colțare și îl trimit prin curier de marfă oriunde în România. Pentru blaturi mari sau montaj la fața locului, venim noi cu mașina.",
  },
  {
    q: "Faceți și blaturi la dimensiuni neobișnuite sau live-edge?",
    a: "Da — asta facem cel mai des. Blaturi cu margine naturală (live-edge), colțuri, decupaje pentru chiuvetă și plită, găuri pentru baterie. Trimite schița cu cotele și mă ocup eu de rest.",
  },
  {
    q: "Cum se face plata?",
    a: "50% avans la confirmarea comenzii — cu banii ăștia cumpăr lemnul și pornesc lucrarea. 50% la livrare, după ce vezi blatul gata. Factură și contract la fiecare comandă.",
  },
  {
    q: "Pot veni să văd atelierul?",
    a: "Sigur. Suntem în Suceava. Sună înainte să te programez și îți arăt scânduri, blaturi în lucru și mostre de finisaj. Cel mai bine alegi lemnul când îl vezi pe viu.",
  },
] as const;
