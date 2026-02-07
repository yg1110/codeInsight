import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const OWNER = "yg1110";
const REPO = "codeInsight";
const BRANCH = "main";
const TOP_N = Number(process.env.TOP_N ?? 10);

const README_PATH = path.resolve("README.md");
const ROOTS = ["백준", "프로그래머스", "SWEA"];

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

function gitLastCommitUnix(filePath) {
  try {
    const cmd = `git log -n 1 --pretty=format:%ct -- "${filePath}"`;
    const out = execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
    return out ? Number(out) : null;
  } catch {
    return null;
  }
}

function formatDate(unixSec) {
  const d = new Date(unixSec * 1000);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function toGithubUrl(relPath) {
  const encoded = relPath.split(path.sep).map(encodeURIComponent).join("/");
  return `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${encoded}`;
}

function replaceSection(readme, startMarker, endMarker, content) {
  const start = `<!-- ${startMarker} -->`;
  const end = `<!-- ${endMarker} -->`;
  if (!readme.includes(start) || !readme.includes(end)) return readme;

  const before = readme.split(start)[0];
  const after = readme.split(end)[1];
  return `${before}${start}\n\n${content}\n${end}${after}`;
}

function buildRecent() {
  const files = ROOTS.flatMap(walk).filter(isSolutionFile);
  const items = [];

  for (const fp of files) {
    const ts = gitLastCommitUnix(fp);
    if (!ts) continue;
    const rel = path.relative(process.cwd(), fp);
    items.push({ rel, ts });
  }

  items.sort((a, b) => b.ts - a.ts);
  const top = items.slice(0, TOP_N);

  if (top.length === 0) return "- (최근 풀이 없음)";

  return top
    .map((x) => `- [${x.rel}](${toGithubUrl(x.rel)}) — ${formatDate(x.ts)}`)
    .join("\n");
}

let readme = fs.readFileSync(README_PATH, "utf8");
readme = replaceSection(
  readme,
  "RECENT_SOLUTIONS:START",
  "RECENT_SOLUTIONS:END",
  buildRecent(),
);
fs.writeFileSync(README_PATH, readme, "utf8");
console.log("README recent solutions updated.");
