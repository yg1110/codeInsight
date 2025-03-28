const input = require("fs")
            .readFileSync("/dev/stdin")
            .toString()
            .trim()
            .split("\n")
            .map(n => n.split(" ")
            .map(Number));

const map = input.slice(0, 5);
const nums = input.slice(5);
const bingo = Array.from({ length: 5 }, () => Array(5).fill(false));
const N = 5;

const checkNumber = (target) => {
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(map[i][j] === target) {
                bingo[i][j] = true;
                return findBingo();
            }
        }
    }
}

const findBingo = () => {
    let bingoCount = 0;
    let leftDiagonalCheck = true;
    let rightDiagonalCheck = true;
    for(let i=0; i<N; i++) {
        let widthCheck = true;
        let heightCheck = true;
        if(!bingo[i][i]) leftDiagonalCheck = false;
        if(!bingo[N-i-1][i]) rightDiagonalCheck = false;
        for(let j=0; j<N; j++) {
            if(!bingo[i][j]) widthCheck = false;
            if(!bingo[j][i]) heightCheck = false;
        }
        if(widthCheck) bingoCount++;
        if(heightCheck) bingoCount++;
    }
    if(leftDiagonalCheck) bingoCount++;
    if(rightDiagonalCheck) bingoCount++;
    return bingoCount >= 3;
}

const solution = () => {
    let count = 0;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            count++;
            const isBingo = checkNumber(nums[i][j]);
            if(isBingo) return count;
        }
    }
}

console.log(solution());