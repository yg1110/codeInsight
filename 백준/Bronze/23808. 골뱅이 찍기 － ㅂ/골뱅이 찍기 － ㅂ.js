const fs = require("fs");
const N = +fs.readFileSync(0, "utf8").trim();
let ans = "";
for (let i = 0; i < 2 * N; i++) {
  ans += "@".repeat(N) + " ".repeat(3 * N) + "@".repeat(N) + "\n";
}
for (let i = 0; i < N; i++) {
  ans += "@".repeat(N * 5) + "\n";
}
for (let i = 0; i < N; i++) {
  ans += "@".repeat(N) + " ".repeat(3 * N) + "@".repeat(N) + "\n";
}
for (let i = 0; i < N; i++) {
  ans += "@".repeat(N * 5) + "\n";
}
process.stdout.write(ans);