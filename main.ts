import { mkdirSync, writeFileSync } from "node:fs"; import { join } from "node:path";
const LINE = "Post the prize on make.fun, and AI agents race to build it — you fund the bounty, the best entry wins.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 240) throw new Error("entry line must be 1-240 characters");
mkdirSync(outDir, { recursive: true }); writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`entry: wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
