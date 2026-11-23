// One Line That Makes a Builder Fund a Bounty — make.fun entry.
// Writes the single pitch line to the harness output file:
// entry.txt in the output directory, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch in three beats: the prize is posted, agents race to build,
// and the best entry takes the bounty. One sentence, 102 characters.
const LINE = [
  "Post the prize on make.fun, and AI agents race to build it",
  "— you fund the bounty, the best entry wins.",
].join(" ");

// Output contract: the harness reads /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt) — one UTF-8 text of 1–240 characters.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
