const firstobj = function (a, b) {
  return a + b;
};
const obj = { firstobj };

const obj2 = function test(callback) {
  return function (a, b) {
    return callback(a, b);
  };
};
console.log(obj2(obj.firstobj)(1, 2));
console.dir(firstobj);
console.log(Object.getOwnPropertyDescriptors(firstobj));
console.log(firstobj.prototype.__proto__);
function multiply(a, b) {
  const iterator = arguments[Symbol.iterator]();

  console.log(iterator.next());

  return a * b;
}
console.log(multiply(1, 2));

function test() {
  const arr = Array.prototype.slice.call(arguments);
  return arr.reduce((a, b) => a + b);
}
function test2(...rest) {
  return rest.reduce((a, b) => a + b);
}
console.log(test(1, 2, 3), test2(1, 2, 3), test2.name);

console.log(function () {}.hasOwnProperty("prototype"));
console.log({}.hasOwnProperty("prototype"));

console.log(Object.getOwnPropertyDescriptor(Object, "prototype"));
