const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");
const N = +input[0];
let [pl, pr] = input[1].split(" ");
let cnt = pl !== "0" && pr !== "0" && pl === pr ? 1 : 0;
for (let i = 2; i <= N; i++) {
  const [cl, cr] = input[i].split(" ");
  if (cl !== "0" && pl === cl) cnt++;
  if (cr !== "0" && pr === cr) cnt++;
  if (cl !== "0" && cr !== "0" && cl === cr) cnt++;
  pl = cl;
  pr = cr;
}
process.stdout.write(cnt + "\n");