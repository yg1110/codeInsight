const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = +input;
let answer = -1;
const solution = (sum, count) => {
    if(sum === N) {
        answer = count;
        return;
    }
    if(sum > N) return;
    if(answer !== -1) return;
    solution(sum + 5, count + 1);
    solution(sum + 3, count + 1);
}

solution(0, 0);
console.log(answer);