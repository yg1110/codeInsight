const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const visited = Array.from({ length: N }).fill(false);

let cnt = 0;
const combi = (visited, pick, index) => {
    if(index > N) return;
    if(pick === K) {
        cnt++;
        return;
    }
    visited[index] = true;
    combi(visited, pick + 1, index + 1);
    visited[index] = false;
    combi(visited, pick, index + 1);
}

combi(visited, 0, 0);
console.log(cnt);