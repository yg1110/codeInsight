function solution(n) {
    if(n === 1) return 1;
    const endIndex = Math.ceil(n / 2);
    let ans = 1;
    let si = 0;
    let sum = 0;
    for(let i=1; i<=endIndex; i++) {
        sum += i;
        while(sum > n) {
            sum -= ++si;
        }
        if(sum === n) ans++;
    }
    return ans;
}