const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const category = {
  F: "Foundation",
  C: "Claves",
  V: "Veritas",
  E: "Exploration",
};
console.log(category[input[0]]);