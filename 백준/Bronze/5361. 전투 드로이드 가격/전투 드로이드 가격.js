const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const price = [350.34,230.90,190.55,125.30,180.90];
let ans = "";
for(let i=1; i<=N; i++) {
  const tc = input[i].split(" ").map(Number);
  let cnt = 0;
  for(let j=0; j<tc.length; j++) {
    cnt+= tc[j] * price[j];
  }
  ans += "$" + cnt.toFixed(2) + "\n"
}
console.log(ans.trim());