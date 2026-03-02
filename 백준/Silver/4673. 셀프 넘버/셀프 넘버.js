const MAX = 10000;
const self = Array(MAX + 1).fill(true);
let out = "";
for (let i = 1; i <= MAX; i++) {
  const digits = String(i).split("").map(Number);
  const sum = i + digits.reduce((acc, cur) => acc + cur, 0);
  if (sum <= MAX) self[sum] = false;
}
for (let i = 1; i <= MAX; i++) {
  if (self[i]) out += i + "\n";
}
process.stdout.write(out);