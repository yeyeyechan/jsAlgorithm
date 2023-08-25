function foo() {
  x = 10;
}
foo();
console.log(x);

const obj2 = {
  a: 1,
  a: 2,
};
console.log(obj2);
let a = 1.2111111;
let b = 0.1111111;
let c = 1.3222222;
console.log(a + b === c);

const test = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();

console.log(test());
console.log(Number.isFinite(Infinity));
console.log(test());

class Person {
  constructor(name) {
    this.name = name;
    this.test = function () {
      console.log("hi ", this.name);
    };
  }
  sayHi() {
    console.log("hi ", this.name);
  }
  static sayHello() {
    console.log("hello");
  }
}
const person = new Person("test");
person.test();
console.log(person);
console.dir(person);
