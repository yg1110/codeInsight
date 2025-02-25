const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const coords = [];
for(let i=0; i<N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    coords.push({ x, y });
}
const answer = coords.sort((a, b) => {
    if(a.y === b.y) return a.x - b.x;
    return a.y - b.y;
}).reduce((acc, cur) => acc += `${cur.x} ${cur.y}\n`, "");
console.log(answer);