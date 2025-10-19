const add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

const add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();
console.log(add1(1, 2));

const add2 = function () {
  var a = 10;
  console.log(arguments);
  return new Function("x", "y", "return x+y+a;");
};
console.log(add1(1, 2));

const add3 = (a, b) => a + b;

console.log(add3(1));
console.log(add3(1, 2, 3, 4, 5));

console.log(add2(1, 2));

function add4(x, y) {
  if (typeof x === "string" || typeof y === "string") {
    throw new TypeError("인수는 모두 숫자여야 한다.");
  }
  return x + y;
}
console.log(add4(1, 2));
function add5(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}
console.log(add5(1, 2));

function add6(x = 0, y = 0) {
  return x + y;
}
console.log(add6(1));
console.log(add6(1, undefined));
console.log(add6(null, null));

function foo() {
  return;
}
console.log(foo());

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "kim";
}
const num = 100;
const obj = { name: "jake" };

console.log(num, obj);

changeVal(num, obj);
console.log(num, obj);
console.log(
  (function () {
    let a = 3,
      b = 2;
    return a + b;
  })()
);
console.log(
  !(function () {
    let a = 3,
      b = 2;
    return a + b;
  })()
);
const val = (function (a, b) {
  return a + b;
})(3, 2);
console.log(val);

function repeat(callback, n) {
  for (let i = 0; i < n; i++) callback(i);
}
repeat((i) => console.log(i), 10);
