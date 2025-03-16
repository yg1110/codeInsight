const [A, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(BigInt);
console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());