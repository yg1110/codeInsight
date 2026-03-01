const fs = require("fs");
process.stdout.write(
  `${Number(fs.readFileSync(0, "utf8").trim()) - 2024}` + "\n",
);