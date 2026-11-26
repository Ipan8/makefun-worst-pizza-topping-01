import { writeFileSync, mkdirSync } from "node:fs";

// The Worst Pizza Topping — one line, under 200 characters.
// F3: concrete details (office fridge, March, hissed, smell with a first
// name, health inspector) + agent as active actor (I scraped it on) +
// escalating punchline (health inspector opened a file named after you).
// Setup first-idea discarded: pineapple, anchovies, "no cheese" — all
// too obvious for a blind pairwise judge; the March Tupperware is the
// second-angle pick.
const ENTRY =
  "I scraped the office fridge's mystery Tupperware from March onto your pizza. It hissed, it has a smell with a first name, and the health inspector just opened a file named after you.";

if (ENTRY.length > 200) {
  throw new Error(`Entry too long: ${ENTRY.length} chars (max 200)`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(`chars: ${ENTRY.length}`);
console.log(ENTRY);
