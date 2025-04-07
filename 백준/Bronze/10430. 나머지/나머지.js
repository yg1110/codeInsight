const [A, B, C] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C)
console.log(((A % C) * (B % C)) % C);