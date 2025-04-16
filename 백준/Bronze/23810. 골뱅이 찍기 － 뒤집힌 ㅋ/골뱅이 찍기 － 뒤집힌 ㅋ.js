const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = +input;
let result = "";
result += ("@@@@@".repeat(N) + "\n").repeat(N);
result += ("@".repeat(N) + "\n").repeat(N);
result += ("@@@@@".repeat(N) + "\n").repeat(N);
result += ("@".repeat(N) + "\n" + "@".repeat(N) + "\n").repeat(N);
console.log(result);