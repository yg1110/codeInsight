const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const files = new Map();
input.forEach(item => {
    const [name, extension] = item.split(".");
    if(files.has(extension)) {
        const count = files.get(extension);
        files.set(extension, count + 1);
    } else {
        files.set(extension, 1);
    }
});

const answer = [...files.entries()]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((item) => item.join(" "));
console.log(answer.join("\n"));