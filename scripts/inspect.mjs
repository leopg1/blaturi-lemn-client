import puppeteer from "puppeteer-core";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const URL = "http://127.0.0.1:4321/";

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ["--disable-gpu"],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle2" });

const info = await page.evaluate(() => {
  const bar = document.getElementById("mobile-sticky");
  if (!bar) return { exists: false };
  const cs = getComputedStyle(bar);
  const rect = bar.getBoundingClientRect();
  return {
    exists: true,
    display: cs.display,
    visibility: cs.visibility,
    opacity: cs.opacity,
    transform: cs.transform,
    position: cs.position,
    rect: { top: rect.top, bottom: rect.bottom, height: rect.height, width: rect.width },
    viewportHeight: window.innerHeight,
  };
});

console.log(JSON.stringify(info, null, 2));

await browser.close();
