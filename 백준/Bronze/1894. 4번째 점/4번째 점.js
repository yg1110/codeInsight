const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").toString().trim().split("\n");
const out = [];
const isSame = (u, v) => u.x === v.x && u.y === v.y;
const calculatePoint = (a, b, c) => {
  const x = +a.x + +b.x - +c.x;
  const y = +a.y + +b.y - +c.y;
  return { x, y };
};
const printPoint = (p) => `${p.x.toFixed(3)} ${p.y.toFixed(3)}`;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].split(" ");
  const p1 = { x: line[0], y: line[1] };
  const p2 = { x: line[2], y: line[3] };
  const p3 = { x: line[4], y: line[5] };
  const p4 = { x: line[6], y: line[7] };
  if (isSame(p1, p3)) out.push(printPoint(calculatePoint(p2, p4, p1)));
  if (isSame(p1, p4)) out.push(printPoint(calculatePoint(p2, p3, p1)));
  if (isSame(p2, p3)) out.push(printPoint(calculatePoint(p1, p4, p2)));
  if (isSame(p2, p4)) out.push(printPoint(calculatePoint(p1, p3, p2)));
}
process.stdout.write(out.join("\n") + "\n");