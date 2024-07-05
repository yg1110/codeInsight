function getPersonality(personality) {
    let result = '';
    result += personality.R >= personality.T ? 'R' : 'T';
    result += personality.C >= personality.F ? 'C' : 'F';
    result += personality.J >= personality.M ? 'J' : 'M';
    result += personality.A >= personality.N ? 'A' : 'N';
    return result;
}

function solution(survey, choices) {
    const personality = {
        R: 0, T: 0, C: 0, F: 0,
        J: 0, M: 0, A: 0, N: 0
    };
    for(let i=0; i<choices.length; i++) {
        const s = survey[i];
        const c = choices[i];
        if(c < 4) {
            personality[s[0]] += [0, 3, 2, 1][c];
        }
        if(c > 4) {
            personality[s[1]] += c - 4;
        }
    }
    return getPersonality(personality);
}