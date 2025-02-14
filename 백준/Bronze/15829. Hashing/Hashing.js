const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const word = arr[1];
const MOD = 1234567891n;
let sum = 0n;
for(let i=0; i<word.length; i++) {
    const alpha = BigInt(word[i].charCodeAt(0) - 96);
    const hash = (31n ** BigInt(i)) % MOD;
    sum = (sum + (alpha * hash) % MOD) % MOD;
}
console.log(sum.toString());