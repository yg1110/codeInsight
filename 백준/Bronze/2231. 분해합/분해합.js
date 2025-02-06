const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let ans = 0;
for (let i = 1; i <= +input; i++) {
  let sum = i;
  const num = i.toString();
  for (let j = 0; j < num.length; j++) {
    sum += +num[j];
  }
  if (sum === +input) {
    ans = i;
    break;
  }
}
console.log(ans);