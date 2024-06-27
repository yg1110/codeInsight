function solution(n) {
    const number = n.toString().split("");
    return number.reverse().map(Number);
}