// The Word You'd Delete From the Dictionary: the word to erase is "colonel".
// Idea: "colonel" is spelled nothing like it sounds — everyone says "kernel".
// Deleting it ends a century of spelling-pronunciation chaos in one stroke:
// no more officers introduced as breakfast cereal, no more schoolkids
// failing the spelling bee on a word that refuses to be sounded out.
// Fresh vs the field (2,385 titles): the saturated picks are irregardless,
// moist, queue, synergy, literally and defenestration. "Colonel" sits far
// outside those clusters — a real word every reader recognises, whose humour
// comes from the word itself (its spelling vs its sound) and the gap its
// deletion would close, not from shock alone.
// Verified 2026-11-26: entry is exactly 7 characters, one word, no spaces,
// no trailing newline. Gate guard below enforces the 1–77 char, single-word
// rule at runtime so a bad edit can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "colonel";

if (line.length < 1 || line.length > 77) throw new Error("entry must be 1-77 chars");
if (line.trim().split(/\s+/).filter(Boolean).length !== 1) throw new Error("entry must be one word");
if (!/^[A-Za-z]+$/.test(line)) throw new Error("entry must be a single spelled word, nothing added around it");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
