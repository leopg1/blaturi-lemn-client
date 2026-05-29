import fs from "node:fs";
import path from "node:path";

const jsonlPath = process.argv[2];
const outDir = process.argv[3] || ".";

if (!jsonlPath) {
  console.error("Usage: node extract-images.mjs <jsonl> [outDir]");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const lines = fs.readFileSync(jsonlPath, "utf8").split("\n").filter(Boolean);

let counter = 0;
for (let i = 0; i < lines.length; i++) {
  let obj;
  try { obj = JSON.parse(lines[i]); } catch { continue; }

  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node.type === "image" && node.source && node.source.data && node.source.media_type) {
      const ext = node.source.media_type.split("/")[1] || "png";
      const fname = `image-${String(counter).padStart(3, "0")}-line${i}.${ext}`;
      const filePath = path.join(outDir, fname);
      fs.writeFileSync(filePath, Buffer.from(node.source.data, "base64"));
      console.log(`Wrote ${filePath} (${node.source.data.length} chars base64, line ${i})`);
      counter++;
    }
    Object.values(node).forEach(walk);
  };
  walk(obj);
}

console.log(`\nTotal: ${counter} image(s) extracted.`);
