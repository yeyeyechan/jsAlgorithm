function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return this.radius ** 2;
  };
}
const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.getArea === circle2.getArea);

function NewCircle(radius) {
  this.radius = radius;
}
NewCircle.prototype.getArea = function () {
  return this.radius ** 2;
};

const circle3 = new NewCircle(1);
const circle4 = new NewCircle(2);
console.log(circle3.getArea === circle4.getArea);

const obj = {};
const person = { name: "jay" };

obj.__proto__ = person;
console.log(obj.name);

console.log(obj.hasOwnProperty("__proto__"));
console.log(Object.getOwnPropertyDescriptors(Object.prototype, "__proto__"));
console.log({}.__proto__ === Object.prototype);

const objnull = Object.create(null);
console.log(objnull.__proto__);
console.log(Object.getPrototypeOf(objnull));

console.log(function () {}.hasOwnProperty("prototype"));
console.log({}.hasOwnProperty("prototype"));

const arrowtest = (name) => {
  this.name = name;
};
console.log(arrowtest.hasOwnProperty("prototype"));

const methodtest = {
  b() {},
};
console.log(methodtest.hasOwnProperty("prototype"));

const prototest = function () {};

console.log(prototest.prototype.__proto__ === Object.prototype);
console.log(prototest.__proto__ === Function.prototype);

const me = new prototest();
console.log(me.constructor === prototest);

console.log(test1.prototype);
function test1() {}

//console.log(test2.prototype);
let test2 = function () {};
console.log(test2.prototype);

function ProtoTest() {}
ProtoTest.prototype.sayHi = function () {
  console.log("test1");
};

const newProtoTest = new ProtoTest();
newProtoTest.sayHi = function () {
  console.log("Test2");
};
newProtoTest.sayHi();
delete newProtoTest.sayHi;
delete newProtoTest.sayHi;
newProtoTest.sayHi();

delete newProtoTest.__proto__.sayHi;
//newProtoTest.sayHi();

console.log(newProtoTest instanceof ProtoTest);

const firstproto = {
  a: 10,
};

const secproto = {
  __proto__: firstproto,
  b: 20,
};

console.log(secproto.a, secproto.b);
console.log(Object.getPrototypeOf(secproto) === firstproto.prototype);

function statictest() {
  this.a = 10;
}
statictest.sayHi = () => {
  console.log("Test");
};
const statictestins = new statictest();
statictest.sayHi();

console.log("a" in statictest);
console.log("sayHi" in statictest);
console.log(Reflect.has(statictest, "sayHi"));
console.log("b" in secproto);
console.log("a" in secproto);
console.log(Object.prototype.hasOwnProperty.call(secproto, "a"));
console.log(secproto.hasOwnProperty("a"));

for (const key in secproto) {
  console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
console.log(firstproto.__proto__.constructor);
const enutest = {
  a: 19,
  b: 19,
};
for (const key of Object.keys(enutest)) {
  console.log(key);
}
