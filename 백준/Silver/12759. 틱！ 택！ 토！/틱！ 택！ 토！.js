const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
let player = input[0];
const map = Array(4)
  .fill("")
  .map(() => Array(4).fill(""));
function win(p) {
  for (let i = 1; i <= 3; i++) {
    if (map[i][1] === p && map[i][2] === p && map[i][3] === p) return true;
    if (map[1][i] === p && map[2][i] === p && map[3][i] === p) return true;
  }
  if (map[1][1] === p && map[2][2] === p && map[3][3] === p) return true;
  if (map[1][3] === p && map[2][2] === p && map[3][1] === p) return true;
  return false;
}
for (let i = 1; i <= 9; i++) {
  const [y, x] = input[i].split(" ").map(Number);
  map[y][x] = player;
  if (win(player)) {
    console.log(player);
    process.exit();
  }
  player = player === "1" ? "2" : "1";
}
console.log("0");