const fs = require("fs");
const K = +fs.readFileSync(0, "utf8").toString().trim();
process.stdout.write("1".repeat(K) + "0".repeat(K - 1) + "\n");