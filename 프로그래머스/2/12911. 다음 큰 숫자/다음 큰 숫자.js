function solution(n) {
    const target = n.toString(2);
    const a = target.split('1').length;
    for(let i=n + 1;;) {
        const b = i.toString(2).split('1').length;
        if(a === b) return i;
        i++;
    }
    return 0;
}