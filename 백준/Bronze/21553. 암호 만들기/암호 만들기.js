const fs = require("fs");
const [A, P] = fs.readFileSync(0, "utf8").trim().split(/\s+/);
console.log(P);