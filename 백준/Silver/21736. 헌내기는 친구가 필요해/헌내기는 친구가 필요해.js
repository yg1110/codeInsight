const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const createMap = () => {
    const map = [];
    const queue = [];
    for(let i=0; i<N; i++) {
        const row = input[i].split("");
        map.push(row);
        if(queue.length === 0) {
            for(let j=0; j<M; j++) {
                if(row[j] === "I") {
                    queue.push({ i, j });
                    break;
                }
            }
        }
    }
    return { map, queue };
}

const move = (queue) => {
    let meeting = 0;
    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];
    while(queue.length) {
        const { i, j } = queue.pop();
        for(let d=0; d<4; d++) {
            const ni = di[d] + i;
            const nj = dj[d] + j;
            if(ni >= 0 && ni < N && nj>= 0 && nj < M) {
                if(map[ni][nj] === 'O') {
                    map[ni][nj] = 'X';
                    queue.push({ i: ni, j: nj });
                }
                if(map[ni][nj] === 'P') {
                    map[ni][nj] = 'X';
                    queue.push({ i: ni, j: nj });
                    meeting++;
                }
            }
        }
    }
    return meeting || 'TT';
}

const { map, queue } = createMap();
console.log(move(queue));