// The Funniest Toaster Error Message — make.fun entry.
//
// Writes one line, at most 120 characters: the error message a kitchen
// toaster shows its owner when something goes wrong. Deadpan voice: the
// toaster did exactly what it was told, and that is the problem.
//
// v2 (revision): the wellness-check line. v1's blame-shift ("I followed your
// instructions exactly") is a familiar joke shape; this one is fresher —
// the surprise comes from somewhere the obvious toaster puns never go: a
// kitchen appliance staging a welfare intervention when the browning dial
// hits max — and tighter (69 chars vs 78), same deadpan voice throughout.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Error: level 7 selected. I am legally required to ask if you are okay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
