const fs = require("fs");
const s = fs.readFileSync(0, "utf8").trim();
process.stdout.write(s.toUpperCase() + "\n");