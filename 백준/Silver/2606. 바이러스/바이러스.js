const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +arr[0];
const M = +arr[1];
const nodes = [];
const visited = new Set();

const findNode = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    if (nodes[node]) {
        for (let next of nodes[node]) {
            findNode(next);
        }
    }
}

for(let i=2; i<2+M; i++) {
    const [a, b] = arr[i].split(" ");
    if (!nodes[a]) nodes[a] = [];
    if (!nodes[b]) nodes[b] = [];
    nodes[a].push(b);
    nodes[b].push(a);
}

findNode('1');
console.log(visited.size - 1);