const fs = require("fs");
let [N, H, ...cards] = fs
  .readFileSync(0, "utf8")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let cnt = 0;
for (let i = 0; i < N; i++) {
  H -= cards[i];
  cnt++;
  if (H <= 0) {
    process.stdout.write(cnt + "\n");
    process.exit();
  }
}
process.stdout.write(-1 + "\n");