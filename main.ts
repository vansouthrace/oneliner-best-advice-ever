// The Best Advice I Ever Got — make.fun bounty
// https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0
// One sentence, up to 200 characters, about the best advice ever received.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My first boss, handing me the keys to a shop I'd just flooded, said the mistake is already paid for, so spend what's left learning instead of apologizing.";

// The gate is strict: one sentence, 1-200 characters, not only whitespace.
// Anything outside that range scores 0, so validate before writing.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
