// Site-wide content. Schimbă valorile de aici și se actualizează în tot site-ul.

export const SITE = {
  brand: "Blaturi de Lemn Premium",
  brandMark: "BLP",
  tagline: "debitări, blaturi live-edge și mese din lemn masiv",
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

// Ce facem — afișat scurt în hero, ca să se vadă din prima
export const HERO_TAGS = [
  "Debitări la comandă",
  "Blaturi live-edge",
  "Mese din lemn masiv",
  "Mese cu rășină epoxidică",
] as const;

// Acoperire — orașe în care livrăm, afișate în marquee
export const COVERAGE_LOCATIONS = [
  "Suceava", "București", "Cluj-Napoca", "Timișoara", "Iași", "Brașov",
  "Constanța", "Oradea", "Sibiu", "Craiova", "Galați", "Bacău",
  "Arad", "Ploiești", "Pitești", "Baia Mare", "Târgu Mureș", "Botoșani",
] as const;

// Servicii — ce face firma, exact
export const SERVICES = [
  {
    n: "01",
    title: "Debitări la comandă",
    body:
      "Tăiem bușteni în blaturi groase (slab-uri), la grosimea pe care o vrei. Ai un buștean? Ți-l tăiem și ți-l dăm gata de uscat.",
  },
  {
    n: "02",
    title: "Blaturi live-edge",
    body:
      "Blaturi din lemn masiv cu margine naturală, uscate și gata de finisat. Vii, le vezi pe viu și alegi bucata care îți place.",
  },
  {
    n: "03",
    title: "Mese din lemn masiv",
    body:
      "Mese de living sau de bucătărie dintr-o singură bucată de lemn. Picioare de metal sau de lemn — cum vrei tu.",
  },
  {
    n: "04",
    title: "Mese cu rășină epoxidică",
    body:
      "Mese river: rășină turnată între două blaturi de lemn. Tu alegi culoarea rășinii, noi alegem lemnul potrivit.",
  },
] as const;

// Lucrări — blaturi și mese (fotografii reale ale clientului)
export const LUCRARI = [
  {
    id: 1,
    name: "Blat live-edge cu burl",
    loc: "Plop",
    year: "lemn masiv",
    sqm: "~3 m",
    image: "/blat-burl.jpg",
    alt: "Blat mare din lemn masiv de plop, cu burl și margine naturală, finisat",
    featured: true,
  },
  {
    id: 2,
    name: "Blat live-edge cu figură creață",
    loc: "Plop",
    year: "lemn masiv",
    sqm: "~2,6 m",
    image: "/blat-figura.jpg",
    alt: "Blat înalt din lemn masiv cu figură creață și margine naturală, sprijinit de perete",
    featured: true,
  },
  {
    id: 3,
    name: "Pereche de blaturi pentru mese",
    loc: "Plop",
    year: "lemn masiv",
    sqm: "2 buc",
    image: "/blaturi-pereche-1.jpg",
    alt: "Două blaturi live-edge din lemn masiv, unul cu burl, sprijinite de perete",
  },
  {
    id: 4,
    name: "Blaturi gata de finisat",
    loc: "Plop",
    year: "lemn masiv",
    sqm: "2 buc",
    image: "/blaturi-pereche-2.jpg",
    alt: "Pereche de blaturi din lemn masiv cu margine naturală, pregătite pentru finisare",
  },
] as const;

// Atelier — de la buștean la blat (fotografii reale)
export const ATELIER = [
  {
    image: "/atelier-bustean.jpg",
    title: "Bușteanul",
    body: "De aici pornește totul",
  },
  {
    image: "/atelier-slab.jpg",
    title: "Tăiat în blat",
    body: "Slab gros, proaspăt debitat",
  },
] as const;

// De ce noi — 4 dovezi
export const DOVEZI = [
  { num: "15", unit: "ani", label: "De când tăiem și lucrăm lemn" },
  { num: "100%", unit: "", label: "Lemn masiv — fără pal, fără MDF" },
  { num: "4", unit: "servicii", label: "Debitări · blaturi · mese · rășină" },
  { num: "10", unit: "ani", label: "Garanție scrisă pe lucrare" },
] as const;

// Proces — 5 pași, limbaj simplu
export const PROCES = [
  {
    n: "01",
    t: "Ne spui ce vrei",
    b: "Un blat, o masă, sau ai un buștean de tăiat? Sună sau trimite o poză pe WhatsApp. Îți spun pe loc dacă se poate și cam cât costă."
  },
  {
    n: "02",
    t: "Vii și alegi lemnul",
    b: "Treci pe la atelier și vezi blaturile pe viu. Pui mâna pe ele, alegi bucata care îți place. Lemnul arată altfel în realitate decât în poză."
  },
  {
    n: "03",
    t: "Primești prețul pe hârtie",
    b: "Îți scriu clar: ce lemn, ce dimensiuni, ce finisaj, cât costă și până când e gata. Cât scrie pe ofertă, atât plătești."
  },
  {
    n: "04",
    t: "Lucrăm",
    b: "Debităm, uscăm, finisăm — sau turnăm rășina, dacă e masă cu epoxi. Îți trimit poze pe parcurs, ca să vezi cum iese."
  },
  {
    n: "05",
    t: "Livrăm la tine",
    b: "Ambalăm bine și livrăm oriunde în țară. Dacă vrei, venim și montăm. Primești garanție scrisă pe lucrare."
  },
] as const;

// FAQ — întrebări simple, răspunsuri scurte
export const FAQ = [
  {
    q: "Ce faceți, mai exact?",
    a: "Patru lucruri: debitări (tăiem bușteni în blaturi), vindem blaturi live-edge gata de finisat, facem mese din lemn masiv și facem mese cu rășină epoxidică (river). Tot ce ține de lemn masiv și blaturi.",
  },
  {
    q: "Ce înseamnă blat live-edge?",
    a: "E un blat la care lăsăm marginea naturală a lemnului, așa cum a fost trunchiul — nu o tăiem dreaptă. Așa fiecare blat e unic. Se folosește la mese, birouri, blaturi de bucătărie.",
  },
  {
    q: "Pot veni cu bușteanul meu să-l tăiați?",
    a: "Da. Adu bușteanul la atelier, îl tăiem în blaturi la grosimea pe care o vrei și ți-l dai gata de uscat. Îți spun dinainte câte blaturi scot din el.",
  },
  {
    q: "Cât costă un blat sau o masă?",
    a: "Depinde de mărime, de esența lemnului și de finisaj. Un blat live-edge pornește de la câteva sute de lei, o masă cu rășină costă mai mult. Spune-mi ce vrei și îți dau un preț clar, gratuit.",
  },
  {
    q: "Faceți mese cu rășină (epoxi)?",
    a: "Da. Punem rășină între două blaturi de lemn și iese o masă river, cu un râu colorat pe mijloc. Tu alegi culoarea. Sunt mesele care arată cel mai spectaculos.",
  },
  {
    q: "Cât durează până e gata?",
    a: "Un blat gata de finisat ți-l dau repede. O masă din lemn masiv durează 2–3 săptămâni. O masă cu rășină mai mult, pentru că rășina are nevoie de timp să se întărească. Termenul exact ți-l scriu în ofertă.",
  },
  {
    q: "Livrați în toată țara?",
    a: "Da. Ambalăm blatul sau masa cu grijă și trimitem prin curier oriunde în România. Pentru piese mari, venim noi cu mașina.",
  },
  {
    q: "Pot veni să văd atelierul?",
    a: "Sigur. Suntem în Suceava. Sună înainte să te aștept și îți arăt blaturile pe care le am acum. Cel mai bine alegi lemnul când îl vezi pe viu.",
  },
] as const;
