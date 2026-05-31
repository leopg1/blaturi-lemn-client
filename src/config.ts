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
  "Debitare bușteni",
  "Blaturi live-edge",
  "Mese din lemn masiv",
  "Mese cu rășină",
  "Fronturi de mobilă",
  "Vopsit & lăcuit",
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
    title: "Debitare bușteni",
    body:
      "Ai un buștean în curte sau în pădure? Îl tăiem noi în blaturi groase, la grosimea pe care o vrei tu, și ți-l dăm gata de pus la uscat. Tu spui cât de gros, noi tăiem drept.",
  },
  {
    n: "02",
    title: "Blaturi live-edge",
    body:
      "Blaturi cu marginea lăsată naturală — adică exact forma copacului, nu tăiată dreaptă. Așa fiecare blat e unic. Vino la atelier, le vezi pe viu și alegi bucata care îți place.",
  },
  {
    n: "03",
    title: "Mese din lemn masiv",
    body:
      "Mese de living sau de bucătărie dintr-o bucată groasă de lemn adevărat — nu pal, nu folie. Picioare din lemn sau din metal, cum îți place ție.",
  },
  {
    n: "04",
    title: "Mese cu rășină epoxidică",
    body:
      "Mese cu un „râu” de rășină colorată turnat între două bucăți de lemn (li se spune mese river). Rășina arată ca o sticlă lucioasă. Tu alegi culoarea, noi alegem lemnul potrivit.",
  },
  {
    n: "05",
    title: "Fronturi de mobilă",
    body:
      "Fronturile sunt ușile și sertarele de la mobilă. Le facem din lemn adevărat, la dimensiunile tale — cu noduri și model natural, nu folie lipită.",
  },
  {
    n: "06",
    title: "Vopsit și lăcuit",
    body:
      "Vopsim și lăcuim blaturi, fronturi și mese. Tu alegi culoarea și cât de lucios să fie: mat (fără luciu), satinat (luciu blând) sau lucios.",
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
    image: "/atelier-bustean-2.jpg",
    title: "Buștean gros, cu rădăcină",
    body: "Din ăsta ies blaturi late",
  },
  {
    image: "/atelier-slab.jpg",
    title: "Tăiat în blat",
    body: "Slab gros, proaspăt debitat",
  },
] as const;

// Video — filmări reale de la debitare (poster = un cadru din clip)
export const VIDEOS = [
  {
    src: "/video-1.mp4",
    poster: "/video-1.jpg",
    title: "Tăiem bușteanul în blaturi",
    body: "Dintr-un copac întreg",
  },
  {
    src: "/video-2.mp4",
    poster: "/video-2.jpg",
    title: "Un blat dintr-un buștean",
    body: "Tăiat drept, la grosime",
  },
  {
    src: "/video-3.mp4",
    poster: "/video-3.jpg",
    title: "Direct din buștean",
    body: "La grosimea pe care o vrei",
  },
] as const;

// De ce noi — 4 dovezi
export const DOVEZI = [
  { num: "15", unit: "ani", label: "De când tăiem și lucrăm lemn" },
  { num: "100%", unit: "", label: "Lemn masiv — fără pal, fără MDF" },
  { num: "6", unit: "servicii", label: "De la debitare la masa vopsită" },
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
    a: "Tăiem bușteni în blaturi (asta se numește debitare), vindem blaturi cu margine naturală (live-edge), facem mese din lemn masiv și mese cu rășină, facem fronturi de mobilă (ușile și sertarele) și le vopsim. Pe scurt: tot ce ține de lemn masiv.",
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
    a: "Depinde de mărime, de esența lemnului și de finisaj. Prețul se negociază — spune-mi ce vrei și ne înțelegem. Un blat live-edge pornește de la câteva sute de lei, o masă cu rășină costă mai mult. Estimarea e gratuită.",
  },
  {
    q: "Ce dimensiuni au blaturile?",
    a: "Le avem în diferite lungimi, lățimi și grosimi. Spune-mi pentru ce ai nevoie și îți zic ce am potrivit acum. Dacă vii cu bușteanul tău, îl tăiem la dimensiunea pe care o vrei.",
  },
  {
    q: "Ce umiditate are lemnul?",
    a: "Blaturile sunt în uscare naturală, cu umiditatea sub 40%. Îți spun la fiecare bucată cât are, ca să știi cât mai trebuie să stea până o poți finisa.",
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
