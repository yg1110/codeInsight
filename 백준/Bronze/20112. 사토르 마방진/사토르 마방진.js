const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +lines[0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (lines[i + 1][j] !== lines[j + 1][i]) {
      process.stdout.write("NO\n");
      process.exit();
    }
  }
}
process.stdout.write("YES\n");