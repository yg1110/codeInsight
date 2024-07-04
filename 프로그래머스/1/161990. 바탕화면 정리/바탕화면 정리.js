function solution(wallpaper) {
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, 0, 0];
    
    for(let i=0; i<wallpaper.length; i++) {
        const paper = wallpaper[i].split('');
        for(let j=0; j<paper.length; j++) {
            if(paper[j] === '#') {
                minX = Math.min(minX, j);
                minY = Math.min(minY, i);
                maxX = Math.max(maxX, j + 1);
                maxY = Math.max(maxY, i + 1);
            }
        }
    }
    return [minY, minX, maxY, maxX];
}