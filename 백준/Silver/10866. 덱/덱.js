class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.count = 0;
  }
  push_front(x) {
    if (this.front) {
      const temp = this.front;
      const node = new Node(x);
      this.front = node;
      temp.prev = node;
      node.next = temp;
      this.count = this.count + 1;
    } else {
      const node = new Node(x);
      this.front = node;
      this.rear = node;
      this.count = this.count + 1;
    }
  }
  push_back(x) {
    if (this.rear) {
      const temp = this.rear;
      const node = new Node(x);
      this.rear = node;
      node.prev = temp;
      temp.next = node;
      this.count = this.count + 1;
    } else {
      const node = new Node(x);
      this.front = node;
      this.rear = node;
      this.count = this.count + 1;
    }
  }
  pop_front() {
    const front = this.front;
    if (front) {
      const secondNode = front.next;
      if (secondNode) {
        secondNode.prev = null;
        this.front = secondNode;
      } else {
        this.front = null;
        this.rear = null;
      }
      this.count = this.count - 1;
      return front.value;
    } else {
      return -1;
    }
  }
  pop_back() {
    const rear = this.rear;
    if (rear) {
      const lastPrevNode = rear.prev;
      if (lastPrevNode) {
        lastPrevNode.next = null;
        this.rear = lastPrevNode;
      } else {
        this.front = null;
        this.rear = null;
      }
      this.count = this.count - 1;
      return rear.value;
    } else {
      return -1;
    }
  }
  size() {
    return this.count;
  }
  empty() {
    return this.count === 0 ? 1 : 0;
  }
  get_front() {
    if (this.front) {
      return this.front.value;
    } else {
      return -1;
    }
  }
  get_back() {
    if (this.rear) {
      return this.rear.value;
    } else {
      return -1;
    }
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const deque = new Deque();
const output = [];

for (let i = 0; i < N; i++) {
  const [command, x] = input[i].split(" ");
  if (command === "push_front") deque.push_front(+x);
  else if (command === "push_back") deque.push_back(+x);
  else if (command === "pop_front") output.push(deque.pop_front());
  else if (command === "pop_back") output.push(deque.pop_back());
  else if (command === "size") output.push(deque.size());
  else if (command === "empty") output.push(deque.empty());
  else if (command === "front") output.push(deque.get_front());
  else if (command === "back") output.push(deque.get_back());
}

console.log(output.join("\n"));