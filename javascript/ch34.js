const isIterable = (ele) =>
  ele !== null && typeof ele[Symbol.iterator] === "function";

console.log(isIterable({}));
console.log(isIterable([]));

const arr = [1, 2, 3, 4];

for (const ele of arr) {
  console.log(ele);
}

console.log(Symbol.iterator in arr);

//console.log("next" in arr.Symbol.iterator());
console.log("next" in arr[Symbol.iterator]());

const iter = arr[Symbol.iterator]();
for (const ele of arr) {
  console.log(iter.next());
}
arr[Symbol(5)] = 3;
console.log(Object.getOwnPropertyDescriptors(arr));

function fibonacci(max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur, done: cur >= max };
    },
  };
}

console.log(...fibonacci(10));
