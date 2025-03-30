const map = require("fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split("\n")
            .map(i => i.split(" ").map(Number));

const N = 19;
const di = [-1, 0, 1, 1];
const dj = [1, 1, 1, 0];

const prevStoneCheck = (stone, i, j, d) => {
    const ni = i + (di[d] * -1);
    const nj = j + (dj[d] * -1);
    if(ni>=0 && ni < N && nj>=0 && nj < N) {
        if(map[ni][nj] === stone) return true;
    }
    return false;
}

const findStone = (stone, i, j, d) => {
    let count = 1;
    let ci = i;
    let cj = j;
    while(true) {
        const ni = ci + di[d];
        const nj = cj + dj[d];
        if(ni>=0 && ni < N && nj>=0 && nj < N) {
            if(map[ni][nj] === stone) {
                count++;
                ci = ni;
                cj = nj;
            }
            else break;
        } else {
            break;
        }
    }
    const hasPrevStone = prevStoneCheck(stone, i, j, d);
    return !hasPrevStone && count === 5;
}

const solution = () => {
    let result = "0";
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(map[i][j] !== 0) {
                for(let d=0; d<4; d++) {
                    const check = findStone(map[i][j], i, j, d);
                    if(check) {
                        result = `${map[i][j]}\n${i+1} ${j+1}`
                        return result;
                    }
                }
            }
        }
    }
    return result;
}
console.log(solution());