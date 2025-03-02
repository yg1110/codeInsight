const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +arr.shift();

const findMax = (item) => {
    let max = 0;
    for(let i=0; i<item.length; i++) {
        if(max < item[i].value) max = item[i].value;
    }
    return max;
}

for(let t=0; t<T; t++) {
    let count = 0;
    const [N, M] = arr.shift().split(" ").map(Number);
    const docs = arr.shift().split(" ").map((doc, index) => {
        return {
            index: index,
            value: +doc
        }
    });
    let max = findMax(docs);
    while(true) {
        if(docs[0].value === max) {
            count++;
            if(docs[0].index === M) break;
            docs.shift();
            max = findMax(docs);
        } else {
            docs.push(docs.shift());
        }
    }
    console.log(count);
}