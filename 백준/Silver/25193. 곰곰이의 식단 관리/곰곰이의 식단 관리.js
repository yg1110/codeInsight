const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const arr = input.shift().split("");
const C = arr.filter((item) => item === "C").length;
const A = arr.filter((item) => item !== "C").length;
const ans = Math.ceil(C / (A + 1));
console.log(ans);