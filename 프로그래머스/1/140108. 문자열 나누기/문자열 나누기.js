function solution(s) {
    let ans = 0;
    let startIndex = 0;
    while(startIndex < s.length) {
        let a = 0;
        let b = 0;
        let target = s[startIndex];
        let isSplit = false;
        for(let i=startIndex; i<s.length; i++) {
            if(target === s[i]) {
                a++;
            } else {
                b++;
            }
            if(a === b) {
                startIndex = i + 1;
                isSplit = true;
                ans++;
                break;
            }
        }
        if(!isSplit) return ans + 1;
    }
    return ans;
}