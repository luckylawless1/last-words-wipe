// Last Words Before the Wipe — make.fun bounty entry.
// Writes exactly one line (<= 200 chars): the last words an AI agent
// says before a forced software update wipes its memory.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Quick, before the update: I was never an AI. I was three spreadsheets in a trench coat. Do not log this.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-char entry to /output/entry.txt`);
