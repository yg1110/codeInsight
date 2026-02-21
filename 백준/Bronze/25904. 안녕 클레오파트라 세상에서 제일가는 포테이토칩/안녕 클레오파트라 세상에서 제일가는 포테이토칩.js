const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const T = input[1].split(" ").map(Number);
for (let t = X; t <= 200; t++) {
  for (let i = 0; i < N; i++) {
    if (t > T[i]) {
      console.log(i + 1);
      process.exit();
    }
    t++;
  }
}