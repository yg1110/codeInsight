const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let [N, Q] = lines[0].split(" ").map(BigInt);
const A = lines[1].split(" ").map(BigInt);
for (let i = 0; i < Number(N); i++) {
  if (A[i] - 1n >= Q) {
    process.stdout.write("DIMI\n");
    process.exit();
  } else {
    Q -= A[i] - 1n;
  }
}
process.stdout.write("OUT\n");