const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt);
console.log((N / M).toString());
console.log((N % M).toString());