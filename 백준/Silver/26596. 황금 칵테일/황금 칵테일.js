const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
const map = {};
for (let i = 1; i <= N; i++) {
  const [s, x] = lines[i].split(" ");
  map[s] = (map[s] || 0) + Number(x);
}
for (let i = 0; i < Object.keys(map).length; i++) {
  for (let j = 0; j < Object.keys(map).length; j++) {
    if (i === j) continue;
    const a = map[Object.keys(map)[i]];
    const b = map[Object.keys(map)[j]];
    if (Math.floor(a * 1.618) === b) {
      console.log("Delicious!");
      process.exit();
    }
  }
}
console.log("Not Delicious...");