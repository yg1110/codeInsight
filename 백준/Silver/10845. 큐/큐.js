const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
class Queue {
    constructor() {
        this.queue = [];
    }
    push(item) {
        this.queue.push(item);
    }
    pop() {
        if(this.queue.length === 0) return -1;
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
    empty() {
        return this.queue.length === 0 ? 1 : 0;
    }
    front() {
        if(this.queue.length === 0) return -1;
        return this.queue[0];
    }
    back() {
        if(this.queue.length === 0) return -1;
        return this.queue[this.queue.length -1];
    }
}

const queue = new Queue();
const result = [];
for(let i=1; i<arr.length; i++) {
    const [op, X] = arr[i].split(" ");
    switch(op) {
        case "push":
            queue.push(X);
            break;
        case "pop":
            result.push(queue.pop());
            break;
        case "size":
            result.push(queue.size());
            break;
        case "empty":
            result.push(queue.empty());
            break;
        case "front":
            result.push(queue.front());
            break;
        case "back":
            result.push(queue.back());
            break;
    }
}
console.log(result.join('\n'));