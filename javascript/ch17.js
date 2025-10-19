const reg = /^[a-z]/gi;
console.log(reg.test("aaaa"));

function Circle(radius) {
  //if (!new.target) return new Circle(radius);
  if (!(this instanceof Circle)) return new Circle(radius);
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };

  //return {};
}
const obj = {
  method() {},
  method2: function () {},
};
//new obj.method();
new obj.method2();
const circle = Circle(10);
//onsole.log(radius);

const circle2 = new Circle(10);
const circle3 = new Circle(11);
console.log(circle2);

function sum(a, b) {
  a = a || 0;
  b = b || 0;
  return a + b;
}
function returnobj() {
  return { name: "test" };
}
console.log(new sum());
console.log(Circle());

const num1 = Number(1);
const num2 = new Number(1);
console.log(typeof num1, typeof num2);
