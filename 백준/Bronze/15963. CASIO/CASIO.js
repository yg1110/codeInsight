const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B] = input.split(" ");
console.log(A === B ? 1 : 0);
