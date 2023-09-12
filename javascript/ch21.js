const str = new String("12#");
const strnormal = "123";
console.log(typeof strnormal);
console.log(typeof str);
console.log(str instanceof String);
console.log(str instanceof Object);

console.log(isFinite(Infinity));
//console.log(eval("function test(){console.log('test');}"));

console.log(parseFloat(" 30 50 test"));
console.log(parseFloat("years 30"));
console.log(parseFloat("10.00"));
//console.log(pasreFloat(30.0));
console.log(parseInt(10.0));
console.log(parseInt("10.90"));
console.log(parseInt(100, 2));
console.log(parseInt("100", 2));
const num = 15;
console.log(parseInt(num.toString(2), 2));
console.log(parseInt(0x3, 2));

const value = 1;
const test = {
  value: 100,
  timer() {
    setTimeout(
      function () {
        console.log(this.value);
      }.bind(this),
      1000
    );
  },
};
function circle() {
  console.log(arguments);
  return this;
}
const test4 = {
  val: 10,
};
console.log(circle.apply(test4, [1, 2, 3, 4]));
console.log(circle.call(test4, [1, 2, 3, 4]));

const person = {
  print() {
    console.log(this);
  },
};

setTimeout(person.print.bind({ val: 100 }), 100);
