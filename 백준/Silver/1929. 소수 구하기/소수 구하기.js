const [M, N] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = '';
for(let i=M; i<=N; i++) {
    let isDecimal = i > 1 ? true : false;
    for(let j=2; j<=Math.sqrt(i); j++) {
        if(i % j === 0) {
            isDecimal = false;
            break;
        }
    }
    if(isDecimal) {
        result += i + '\n';
    }
}
console.log(result);