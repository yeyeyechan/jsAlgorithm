const arr = [];
const obj = {};

console.time("Array perfomance test");
for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd("Array perfomance test");

console.time("obj perfomance test");
for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}
console.timeEnd("obj perfomance test");

const sparse = [, 2, , 4];
console.log(Object.getOwnPropertyDescriptors(sparse));

const newArr = new Array(3);
console.log(Object.getOwnPropertyDescriptors(newArr));
newArr.push(1);
console.log(Object.getOwnPropertyDescriptors(newArr));

const newarr2 = Array.of(1, 2, 3);
console.log(newarr2);
const newarr3 = Array.from("hello");
console.log(newarr3);

const newarr4 = Array.from({ length: 3 }, (_, i) => i);
console.log(newarr4);
const newarr5 = new Array(4294967295);
newarr5["a"] = "123";
console.log(Object.getOwnPropertyDescriptors(newarr5));
newarr4.splice(1, 1);
console.log(newarr4);

const newarr6 = new Array();
newarr6["test"] = "123";
console.log(Array.isArray(newarr6));
console.log(newarr6.indexOf("123"));

const newarr7 = [1, 23, 4];
console.log(newarr7.indexOf(23));
console.log(newarr7.includes(4));

newarr7.push(5);
const newarr8 = [...newarr7, 22];

const Stack = (function () {
  function Stack(array) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array`);
    }
    this.array = array;
  }
  Stack.prototype = {
    constructor: Stack,

    pop() {
      return this.array.pop();
    },
    push(ele) {
      return this.array.push(ele);
    },
    entries() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stack = new Stack([]);
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.entries());

class ClassStack {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) throw new TypeError(`${array} is not an array`);
    this.#array = array;
  }
  pop() {
    return this.#array.pop();
  }
  push(ele) {
    return this.#array.push(ele);
  }
  entries() {
    return [...this.#array];
  }
}

const newClassStk = new ClassStack();
newClassStk.push(1);
console.log(newClassStk.entries());

const arrex = [1, 2];
console.log(arrex.unshift(3, 3, 3));
console.log(arrex);

const Queue = (function () {
  function Queue(array) {
    if (!Array.isArray(array)) throw new TypeError(`${array} is not an Array`);
    this.array = array;
  }
  Queue.prototype = {
    constructor: Queue,
    enqueue(val) {
      return this.array.push(val);
    },
    dequeue() {
      return this.array.shift();
    },
    entries() {
      return [...this.array];
    },
  };
  return Queue;
})();

const queue = new Queue([]);
queue.enqueue(1);

console.log(queue.entries());

class ClassQueue {
  #array;
  constructor(array = []) {
    if (!Array.isArray(array)) throw new TypeError(`${array} is not an Array`);
    this.#array = array;
  }
  enqueue(val) {
    return this.#array.push(val);
  }
  dequeue() {
    return this.#array.shift();
  }
  entries() {
    return [...this.#array];
  }
}
const classQueue = new ClassQueue([]);
classQueue.enqueue(1);
console.log(classQueue.entries());

const arrex2 = [1, 2, 3, 4];
function remove(arr, ele) {
  const idx = arr.indexOf(ele);
  if (idx === -1) return false;

  arr.splice(idx, 1);
  return arr;
}

const newarrex2 = arrex2.slice(0);
console.log(newarrex2);
console.log(newarrex2.slice(-2, -1));

function sum() {
  const arr = [...arguments];

  return arr.reduce((a, b) => {
    return a + b;
  });
}
console.log(sum(1, 2, 3));
console.log(arrex2.join(""));
console.log(arrex2.reverse());
console.log(arrex2.includes(2));
console.log(Array.from({ length: 3 }, (_, i) => i));

class Numbers {
  numArray = [];

  multiply(arr) {
    //arr.forEach((ele) => this.numArray.push(ele * ele));
    arr.forEach(function (ele) {
      this.numArray.push(ele * ele);
    }, this);
    return this.numArray;
  }
}
const numbers = new Numbers();

console.log(numbers.multiply([1, 2, 3]));

const product = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(product.reduce((a, b) => a + b.id, 0));
console.log(Math.min(NaN, 1));
