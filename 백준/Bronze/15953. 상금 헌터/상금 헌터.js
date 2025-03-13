const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const getFistContestMoney = (rank) => {
    if(rank === 0) return 0;
    else if(rank === 1) return 5000000;
    else if(rank <= 3) return 3000000;
    else if(rank <= 6) return 2000000;
    else if(rank <= 10) return 500000;
    else if(rank <= 15) return 300000;
    else if(rank <= 21) return 100000;
    return 0;
}

const getSecondContestMoney = (rank) => {
    if(rank === 0) return 0;
    else if(rank === 1) return 5120000;
    else if(rank <= 3) return 2560000;
    else if(rank <= 7) return 1280000;
    else if(rank <= 15) return 640000;
    else if(rank <= 31) return 320000;
    return 0;
}

const T = input[0];
let result = "";
for(let i=1; i<=T; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    const firstContestMoney = getFistContestMoney(a);
    const secondContestMoney = getSecondContestMoney(b);
    result += (firstContestMoney + secondContestMoney) + "\n";
}
console.log(result);