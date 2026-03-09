const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);