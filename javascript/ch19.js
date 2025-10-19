const obj = new Object(null);
console.log(Object.getPrototypeOf(obj));
const obj2 = { name: "test" };
Object.setPrototypeOf(obj, obj2);

console.log(obj.name, obj);

const arrow = () => {};
console.log(Object.getPrototypeOf(arrow));

const objtext = {};
console.log(Object.getPrototypeOf(objtext));

const reg = /[a-z]/gi;
const reg2 = new RegExp("123");
console.log(
  Object.getPrototypeOf(reg).constructor,
  Object.getPrototypeOf(reg2).constructor
);
const num = new Number(123);
console.log(num.__proto__);

function cons() {
  this.name = 12;
}
cons.prototype.getMethod = function () {
  return "test";
};
const cons1 = new cons();
console.log(Object.getPrototypeOf(cons1).constructor, cons1.__proto__);

const test1 = (function () {
  function Person() {}
  Person.prototype.sayHi = function () {
    return "hi";
  };
  Person.prototype = {
    constructor: Person,
    sayHi() {
      return "hi";
    },
  };
  return Person;
})();

const test2 = new test1();

test2.sayHi = function () {
  return "hello";
};
const newproto = {};
console.log(test2.sayHi());
delete test2.sayHi;
console.log(test2.sayHi());
delete test2.sayHi;
console.log(test2.sayHi());
delete test2.__proto__.sayHi;
//console.log(test2.sayHi());

Object.setPrototypeOf(test2, newproto);
const test3 = new test1();
console.log(Object.getPrototypeOf(test3));
console.log(Object.getPrototypeOf(test2));
const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr).constructor);
console.log(arr instanceof Array);
