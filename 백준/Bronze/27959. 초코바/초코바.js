const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const money = +input[0] * 100;
const chocolate = +input[1];
console.log(chocolate <= money ? "Yes" : "No");
