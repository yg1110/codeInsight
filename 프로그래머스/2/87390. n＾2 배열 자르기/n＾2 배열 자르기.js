function solution(n, left, right) {
    const answer = [];
    for(let i=0; i<n; i++) {
        const index = i * n + n;
        if(index < left) continue;
        for (let j=0; j<n; j++) {
            const index = i * n + j;
            if(index >= left && index <= right) {
                if(i < j) {
                    answer.push(j + 1);
                } else {
                    answer.push(i + 1);
                }
            }
            if(index >= right) return answer;
        }
    }
    return answer;
}