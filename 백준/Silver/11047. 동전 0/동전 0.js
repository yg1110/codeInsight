const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [K, N] = input.shift().split(" ").map(Number);
let coins = input.map(Number).sort((a, b) => b - a);
let ans = 0;
while(N !== 0) {
    for(let i=0; i<K; i++) {
        if(N >= coins[i]) {
            ans += Math.floor(N / coins[i]);
            N = N % coins[i]
            coins = coins.slice(i + 1);
            break;
        }
    }
}
console.log(ans);