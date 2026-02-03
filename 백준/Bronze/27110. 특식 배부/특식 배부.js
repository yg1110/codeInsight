const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const sum = arr.reduce((acc, cur) => (acc += Math.min(cur, N)), 0);
console.log(sum);