import puppeteer from "puppeteer-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const URL = process.env.URL || "http://127.0.0.1:4321/";
const OUT_DIR = process.env.OUT_DIR || "C:/Users/leona/AppData/Local/Temp";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

const sections = [
  { id: "hero", y: 0 },
  { id: "servicii", y: "#servicii" },
  { id: "lucrari", y: "#lucrari" },
  { id: "de-ce-noi", y: "#de-ce-noi" },
  { id: "proces", y: "#proces" },
  { id: "acoperire", y: "#acoperire" },
  { id: "faq", y: "#faq" },
  { id: "contact", y: "#contact" },
];

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ["--disable-gpu", "--hide-scrollbars"],
});

try {
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto(URL, { waitUntil: "networkidle2" });
    // Wait for hero entrance animations to complete (~1.5s)
    await new Promise((r) => setTimeout(r, 1800));
    // Force all reveals to "in" state for clean screenshots
    await page.evaluate(() => {
      document.querySelectorAll(".reveal, .reveal-fade, .reveal-scale, .reveal-left, .reveal-heading").forEach((el) => el.classList.add("in"));
    });
    await new Promise((r) => setTimeout(r, 400));
    // Full-page screenshot
    const fullPath = `${OUT_DIR}/full-${vp.name}.png`;
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`[full] ${vp.name} → ${fullPath}`);

    // First-fold screenshot
    const heroPath = `${OUT_DIR}/fold-${vp.name}.png`;
    await page.screenshot({ path: heroPath, fullPage: false });
    console.log(`[fold] ${vp.name} → ${heroPath}`);

    // Per-section scroll-to-element shots (desktop only, to save time)
    if (vp.name === "desktop") {
      for (const s of sections.slice(1)) {
        await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
          // Force all reveals to "in" state for clean screenshots
          document.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
        }, s.y);
        await new Promise((r) => setTimeout(r, 1200));
        const p = `${OUT_DIR}/section-${s.id}.png`;
        await page.screenshot({ path: p, fullPage: false });
        console.log(`[section] ${s.id} → ${p}`);
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}
