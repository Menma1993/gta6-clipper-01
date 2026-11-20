// gta6-clipper-01 — "Clip GTA 6 for the most YouTube views".
// Entry program (Node 22, standard library only).
// It copies VIDEO.json from the repository root to the output directory.
// That is all it has to do: the house reads the video itself through the
// YouTube Data API, and nothing this program writes about the video counts.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "VIDEO.json"), join(outputDir, "VIDEO.json"));
console.log(`VIDEO.json copied to ${join(outputDir, "VIDEO.json")}`);
