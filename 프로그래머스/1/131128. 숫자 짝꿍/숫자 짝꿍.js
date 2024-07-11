
function solution(X, Y) {
    let ans = "";
    const xCount = {};
    const yCount = {};
    for(let i=0; i<10; i++) {
        xCount[i] = 0;
        yCount[i] = 0;
    }
    X.split("").forEach(x => xCount[x] = xCount[x] + 1);
    Y.split("").forEach(y => yCount[y] = yCount[y] + 1);
    for(let i=9; i>=0; i--) {
        if(xCount[i] === 0 || yCount[i] === 0) continue;
        if(i === 0 && ans === "") return "0";
        const len = Math.min(xCount[i], yCount[i]);
        ans += `${i}`.repeat(len);
    }
    return ans || "-1";
}