import fs from "node:fs";
import path from "node:path";

const README_PATH = path.resolve("README.md");

const ROOTS = {
  "BOJ Solutions": "백준",
  "Programmers Solutions": "프로그래머스",
  "SWEA Solutions": "SWEA",
};

const BREAKDOWN = {
  "BOJ Bronze": path.join("백준", "Bronze"),
  "BOJ Silver": path.join("백준", "Silver"),
  "BOJ Gold": path.join("백준", "Gold"),
  "Programmers Lv1": path.join("프로그래머스", "1"),
  "Programmers Lv2": path.join("프로그래머스", "2"),
  "SWEA D2": path.join("SWEA", "D2"),
  "SWEA D3": path.join("SWEA", "D3"),
};

const ALLOWED_EXT = new Set([
  ".js",
  ".ts",
  ".tsx",
  ".py",
  ".java",
  ".cpp",
  ".c",
  ".kt",
  ".go",
  ".rb",
  ".cs",
  ".swift",
]);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function isSolutionFile(fp) {
  const base = path.basename(fp).toLowerCase();
  if (base === "readme.md") return false;
  if (base.startsWith(".")) return false;
  const ext = path.extname(fp).toLowerCase();
  return ALLOWED_EXT.has(ext);
}

function countSolutionFiles(dir) {
  return walk(dir).filter(isSolutionFile).length;
}

function staticBadge(label, value, style = "for-the-badge") {
  const l = encodeURIComponent(label);
  const v = encodeURIComponent(String(value));
  return `![${label}](https://img.shields.io/badge/${l}-${v}-blue?style=${style})`;
}

function replaceSection(readme, startMarker, endMarker, content) {
  const start = `<!-- ${startMarker} -->`;
  const end = `<!-- ${endMarker} -->`;
  if (!readme.includes(start) || !readme.includes(end)) return readme;

  const before = readme.split(start)[0];
  const after = readme.split(end)[1];
  return `${before}${start}\n\n${content}\n${end}${after}`;
}

const countsBlock = Object.entries(ROOTS)
  .map(([label, dir]) =>
    staticBadge(label, countSolutionFiles(dir), "for-the-badge"),
  )
  .join("\n");

const breakdownBlock = Object.entries(BREAKDOWN)
  .map(([label, dir]) =>
    staticBadge(label, countSolutionFiles(dir), "flat-square"),
  )
  .join("\n");

let readme = fs.readFileSync(README_PATH, "utf8");
readme = replaceSection(readme, "COUNTS:START", "COUNTS:END", countsBlock);
readme = replaceSection(
  readme,
  "BREAKDOWN:START",
  "BREAKDOWN:END",
  breakdownBlock,
);

fs.writeFileSync(README_PATH, readme, "utf8");
console.log("README counts updated.");
