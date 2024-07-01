function solution(name, yearning, photo) {
    const score = {};
    for(let i=0; i<name.length; i++) {
        const key = name[i];
        const value = yearning[i];
        score[key] = value;
    }
    return photo.map(item => {
        return item.reduce((acc, cur) => acc + (score[cur] || 0), 0)
    })
}