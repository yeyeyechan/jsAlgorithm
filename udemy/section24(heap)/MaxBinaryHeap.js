class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentidx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentidx];

      if (parent >= element) break;
      this.values[idx] = parent;
      this.values[parentidx] = element;
      idx = parentidx;
    }
  }
  extractMax() {
    let max = this.values[0];
    let ele = this.values[this.values.length - 1];
    this.values.pop();
    if (this.values.length !== 0) {
      this.values[0] = ele;
      this.bubbleDown();
    }

    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    while (idx < length) {
      const element = this.values[0];
      let leftidx = 2 * idx + 1;
      let rightidx = 2 * idx + 2;
      let left, right;
      let swap = null;
      if (leftidx < length) {
        left = this.values[leftidx];
        if (left > element) {
          swap = leftidx;
        }
      }
      if (rightidx < length) {
        right = this.values[rightidx];
        if ((swap === null && right > element) || (!swap && left < right)) {
          swap = rightidx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
