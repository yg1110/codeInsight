const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const X = +input;
const dp = Array.from(new Array(X + 1)).fill(Infinity);
dp[1] = 0;
for(let i=2; i<=X; i++) {
    dp[i] = dp[i-1] + 1;
    if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3] + 1);
    if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2] + 1);
}
console.log(dp[X]);