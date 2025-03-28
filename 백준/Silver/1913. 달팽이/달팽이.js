const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = arr[0];
const target = arr[1];
const map = Array.from({ length: N })
            .map(_ => Array.from({ length: N })
            .fill(0));

let index = N * N;
const cur = {
    i: 0,
    j: 0,
    d: "D"
}
const dir = {
    D: [1, 0],
    R: [0, 1],
    T: [-1, 0],
    L: [0, -1]
}

map[0][0] = index--;
while(index > 0) {
    const { i, j, d } = cur;
    const [di, dj] = dir[d];
    const ni = i + di;
    const nj = j + dj;
    if(ni < N && ni >= 0 && nj < N && nj >= 0 && map[ni][nj] === 0) {
        cur.i = ni;
        cur.j = nj;
        map[ni][nj] = index--;
    }
    else {
        if(d === "D") cur.d = "R";
        else if(d === "R") cur.d = "T";
        else if (d === "T") cur.d = "L";
        else if (d === "L") cur.d = "D";
    }
}

let result = "";
let position = "";
for(let i=0; i<N; i++) {
    result += map[i].join(" ") + "\n";
    if(!position) {
        for(let j=0; j<N; j++) {
            if(map[i][j] === target) {
                position = `${i + 1} ${j + 1}`;
                break;
            }
        }
    }
}
console.log(result.trim());
console.log(position);