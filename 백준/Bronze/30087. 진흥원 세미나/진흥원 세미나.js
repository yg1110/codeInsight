const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const map = new Map();

const N = +input[0];
map.set("Algorithm", 204);
map.set("DataAnalysis", 207);
map.set("ArtificialIntelligence", 302);
map.set("CyberSecurity", "B101");
map.set("Network", 303);
map.set("Startup", 501);
map.set("TestStrategy", 105);

let result = "";
for (let i = 1; i <= N; i++) {
  result += map.get(input[i]) + "\n";
}
console.log(result.trim());