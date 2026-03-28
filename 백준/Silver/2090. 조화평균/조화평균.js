const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const arr = lines[1].split(" ").map(Number);

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

let num = 1n;
let den = BigInt(arr[0]);

for (let i = 1; i < arr.length; i++) {
  const ai = BigInt(arr[i]);
  num = num * ai + den;
  den = den * ai;
  const g = gcd(num, den);
  num /= g;
  den /= g;
}

const g = gcd(den, num);
const p = den / g;
const q = num / g;

console.log(`${p}/${q}`);