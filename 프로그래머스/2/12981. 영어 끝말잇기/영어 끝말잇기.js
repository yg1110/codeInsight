function solution(n, words) {
    const wordSet = new Set();
    let lastWord = "";
    for(let i=1; i<=words.length; i++) {
        const word = words[i - 1];
        if(!wordSet.has(word)) {
            const targetWord = lastWord[lastWord.length -1];
            const wordCheck = word.startsWith(targetWord);
            if(targetWord === undefined || wordCheck) {
                wordSet.add(word);
                lastWord = word;                
            } else {
                return [i % n || n, Math.ceil(i / n)]
            }
        } else {
            return [i % n || n, Math.ceil(i / n)]
        }
    }
    return [0, 0];
}