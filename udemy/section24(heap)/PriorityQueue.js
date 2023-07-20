class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
  }
  bubbleUp() {
    let length = this.values.length;
    let idx = length - 1;
    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];
      if (parent.priority >= this.values[idx].priority) break;
      this.values[parentidx] = this.values[idx];
      this.values[idx] = parent;
      idx = parentidx;
    }
  }

  dequeue() {
    let root = this.values[0];
    let end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return root;
  }
  bubbleDown() {
    let idx = 0;
    let length = this.values.length;

    while (idx < length) {
      let element = this.values[idx];
      let leftidx = 2 * idx + 1;
      let rightidx = 2 * idx + 2;
      let swap = null;
      let left, right;
      if (leftidx < length) {
        left = this.values[leftidx];
        if (left.priority < element.priority) {
          swap = leftidx;
        }
      }
      if (rightidx < length) {
        right = this.values[rightidx];
        if (
          (swap && right.priority < left.priority) ||
          (!swap && right.priority < element.priority)
        ) {
          swap = rightidx;
        }
      }
      if (swap === null) break;
      this.values[swap] = element;
      this.values[idx] = this.values[swap];
      idx = swap;
    }
  }
}
