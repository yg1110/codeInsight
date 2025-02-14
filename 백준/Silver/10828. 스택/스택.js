const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    if(this.stack.length === 0) return -1;
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  empty() {
    return this.stack.length === 0 ? 1 : 0;
  }
  top() {
    if(this.stack.length === 0) return -1;
    return this.stack[this.stack.length - 1];
  }
}

const stack = new Stack();
const result = [];
for(let i=1; i<arr.length; i++) {
    const [op, X] = arr[i].split(" ");
    switch(op) {
        case "push":
          stack.push(+X);
          break;
        case "pop":
          result.push(stack.pop());
          break;
        case "size":
          result.push(stack.size());
          break;
        case "empty":
          result.push(stack.empty());
          break;
        case "top":
          result.push(stack.top());
          break;
        default:
          break;
    }
}
console.log(result.join('\n'));