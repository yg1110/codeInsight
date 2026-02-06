const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [y1, m1, d1] = input[0].trim().split(" ").map(Number);
const [y2, m2, d2] = input[1].trim().split(" ").map(Number);

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function utcMidnightMs(y, m, d) {
  return Date.UTC(y, m - 1, d);
}

const ggThreshold = utcMidnightMs(y1 + 1000, m1, d1);
const target = utcMidnightMs(y2, m2, d2);

if (target >= ggThreshold) {
  console.log("gg");
} else {
  const today = utcMidnightMs(y1, m1, d1);
  const diffDays = (target - today) / MS_PER_DAY;
  console.log("D-" + diffDays);
}