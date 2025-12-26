const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const reg = new RegExp(input[1], "gi");
const rest = input[0].replaceAll(reg, "");
console.log((input[0].length - rest.length) / input[1].length);