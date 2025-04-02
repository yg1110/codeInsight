const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const visit = new Array(N).fill(false).map(_ => new Array(M).fill(false));
const di = [0, 1, 0, -1];
const dj = [1, 0, -1, 0];
let i = 0;
let j = 0;
let dir = 0;
let moveCount = 0;
let index = 1;
while(index !== N * M) {
    visit[i][j] = true;
    let isRotated = true;
    for(let d=dir; d<(dir + 4); d++) {
        const ni = di[d % 4] + i;
        const nj = dj[d % 4] + j;
        if(ni >= 0 && ni < N && nj >= 0 && nj < M && !visit[ni][nj]) {
            i = ni;
            j = nj;
            index++;
            dir = d;
            break;
        }
        moveCount++;
    }
}
console.log(moveCount)