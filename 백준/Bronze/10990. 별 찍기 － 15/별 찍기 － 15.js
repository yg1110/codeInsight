const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
function solution() {
    let result = " ".repeat(N-1) + "*\n"
    let left = N - 2;
    let middle = 1;
    for(let i=2; i<=N; i++) {
        result += " ".repeat(left);
        result += "*";
        result += " ".repeat(middle);
        result += "*\n";
        left -= 1;
        middle += 2;
    }
    return result;
}

console.log(solution());