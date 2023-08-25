class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    if (this.isEmpty()) {
      this.queue.push(newNode);
    } else {
      let flag = false;
      for (let i = this.size() - 1; i >= 0; i--) {
        if (newNode.priority < this.queue[i].priority) {
          this.queue.splice(i, 0, newNode);
          flag = true;
          break;
        }
      }
      if (flag) {
        this.queue.push(newNode);
      }
    }
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  dequeue() {
    return this.queue.shift();
  }
  front() {
    return this.queue[0];
  }
  clear() {
    this.queue = [];
  }
}
