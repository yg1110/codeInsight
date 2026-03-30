const fs = require("fs");
const T = +fs.readFileSync(0, "utf8").trim();
console.log(Math.round((T * T) / 4));