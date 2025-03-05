const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let sum = 0;
let ans = 0;
for(let i=1;; i++) {
    sum += i;
    if(sum > +input) {
        if(i % 2 === 1) {
            ans = sum - +input;
        }
        break;
    }
}
console.log(ans);