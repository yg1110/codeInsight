const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
function play(a, b) {
  const end = Math.max(a.cnt, b.cnt);
  for (let i = end; i > 0; i--) {
    if ((a[i] || 0) > (b[i] || 0)) return "A";
    if ((a[i] || 0) < (b[i] || 0)) return "B";
  }
  return "D";
}
for (let i = 1; i <= N * 2; i += 2) {
  const a = lines[i].split(" ").reduce((acc, cur, idx) => {
    if (idx > 0) {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    } else {
      acc["cnt"] = cur;
      return acc;
    }
  }, {});
  const b = lines[i + 1].split(" ").reduce((acc, cur, idx) => {
    if (idx > 0) {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    } else {
      acc["cnt"] = cur;
      return acc;
    }
  }, {});
  console.log(play(a, b));
}