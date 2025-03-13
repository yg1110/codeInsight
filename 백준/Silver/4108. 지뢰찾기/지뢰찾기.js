const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const makeMap = (line, R) => {
    const map = [];
    for(let i=1; i<=R; i++) {
        map.push(arr[line + i].split(""))
    }
    return map;
}

const checkMine = (map, i, j, R, C) => {
    const di = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dj = [-1, 0, 1, -1, 1, -1, 0, 1];
    let mine = 0;
    for(let d=0; d<8; d++) {
        const ni = i + di[d];
        const nj = j + dj[d];
        if(ni >= 0 && ni < R && nj >= 0 && nj < C) {
            if(map[ni][nj] === "*") mine++;
        }
    }
    return mine;
}

for(let line=0; line<arr.length-1; line++) {
    const [R, C] = arr[line].split(" ").map(Number);
    const map = makeMap(line, R);
    for(let i=0; i<R; i++) {
        for(let j=0; j<C; j++) {
            if(map[i][j] === ".") {
                map[i][j] = checkMine(map, i, j, R, C);
            }
        }
        map[i] = map[i].join("");
    }
    line += R;
    console.log(map.join("\n"));
}