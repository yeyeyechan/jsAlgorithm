class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(val) {
    this.arr.push(val);
  }
  size() {
    return this.arr.length;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.arr[0];
      this.arr = this.arr.slice(1, this.size()); //pop, splice 등
      return result;
    }

    //return this.arr.shift(); //빈배열의 경우 undefined
  }
  front() {
    return this.arr[0];
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  clear() {
    this.arr = [];
  }
}
const names = ["jack", "mike", "john", "mikey", "jay"];
const count = 5;
function circularQueue(names, count) {
  const queue = new Queue();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < count; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(queue.dequeue(), " fail");
  }
  console.log(queue.front(), " success:)");
}
circularQueue(names, count);
