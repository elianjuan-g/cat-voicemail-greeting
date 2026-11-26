// Funniest Cat Voicemail Greeting
// Writes one one-line cat voicemail greeting (<=120 chars) to /output/entry.txt.
// Deterministic: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "You've reached Miso. I'm sitting on the keyboard you need for work. Talk fast — my nap starts in three... two...";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
