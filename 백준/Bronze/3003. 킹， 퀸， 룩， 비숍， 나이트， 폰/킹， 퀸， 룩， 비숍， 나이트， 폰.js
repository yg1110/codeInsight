const [K, Q, R, B, N, P] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = "";
result += 1 - K + " ";
result += 1 - Q + " ";
result += 2 - R + " ";
result += 2 - B + " ";
result += 2 - N + " ";
result += 8 - P;
console.log(result);