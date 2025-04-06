const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const money = [500, 100, 50, 10, 5, 1];
let change = 1000 - Number(input);
let coin = 0;
for(let i=0; i<money.length; i++) {
    if(change < money[i]) continue;
    const count = Math.floor(change / money[i]);
    coin += count;
    change -= count * money[i];
    if(count === 0) break;
}
console.log(coin);