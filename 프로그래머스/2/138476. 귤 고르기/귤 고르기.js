function solution(k, tangerine) {
    let answer = 0;
    const countMap = new Map();
    tangerine.forEach(size => {
        countMap.set(size, (countMap.get(size) || 0) + 1);
    })
    const counts = Array.from(countMap).sort((a, b) => b[1] - a[1])
    for(let count of counts) {
        k -= count[1];
        answer += 1;
        if(k <= 0) return answer;
    }
    return answer;
}