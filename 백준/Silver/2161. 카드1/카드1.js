const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const cards = Array.from({ length: N }, (_, i) => i + 1);
const ans = [];
let head = 0;

while (ans.length < N) {
  ans.push(cards[head++]);
  if (head < cards.length) cards.push(cards[head++]);
}
console.log(ans.join(" "));