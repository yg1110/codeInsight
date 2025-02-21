const [a, d, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let ans = "X";
for(let i=0;;i++) {
    const sum = a + i * d;
    if(d > 0 ? sum > k : sum < k) break;
    if(sum === k) {
        ans = i + 1;
        break;
    }
}
console.log(ans);