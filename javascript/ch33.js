const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 === symbol2);
const symbol3 = Symbol.for("");
console.log(symbol1 === symbol3);
console.log(symbol1 === symbol3);
const symbol4 = Symbol.for("");
console.log(symbol4 === symbol3);

const direction = Object.freeze({
  UP: Symbol("up"),
});
const direct = direction.UP;
console.log(direction.UP === direct);

console.log(Symbol.keyFor(symbol1));
console.log(Symbol.keyFor(symbol3));

const obj = {
  [Symbol("key")]: 1,
};

for (const ele in obj) {
  console.log(ele);
}
console.log(Object.getOwnPropertyNames(obj));
console.log(
  Object.getOwnPropertySymbols(obj),
  obj[Object.getOwnPropertySymbols(obj)[0]]
);
