const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = 1;
for(let i=0;; i++) {
    n += i*6;
    if(+input <= n) {
        console.log(i + 1);
        break;
    }
}