function getDayDiff(start, end) {
    let diff = 0;
    const [startYear, startMonth, startDay] = start.split('.');
    const [endYear, endMonth, endDay] = end.split('.');
    diff += (endYear - startYear) * 28 * 12;
    diff += (endMonth - startMonth) * 28;
    diff += endDay - startDay;
    return diff;
}
function solution(today, terms, privacies) {
    const result = [];
    const destroyMonth = terms.reduce((acc, cur) => {
        const [termName, month] = cur.split(" ");
        acc[termName] = +month * 28;
        return acc;
    }, {})
    privacies.forEach((privacie, index) => {
        const [termDay, termName] = privacie.split(" ");
        const diffDay = getDayDiff(termDay, today);
        if(destroyMonth[termName] <= diffDay) {
            result.push(index + 1);
        }
    });
    return result;
}