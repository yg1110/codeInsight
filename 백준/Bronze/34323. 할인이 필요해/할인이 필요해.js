const fs = require("fs");
const [N, M, S] = fs.readFileSync(0, "utf8").trim().split(" ").map(BigInt);
const a = M * S;
const b = ((M + 1n) * S * (100n - N)) / 100n;
console.log(Math.min(a.toString(), b.toString()));