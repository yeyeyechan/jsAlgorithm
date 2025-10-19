const key = "key";
const obj = { [key]: "value" };

const seckey = "seckey";
obj[seckey] = "value2";
obj[0] = "zero";
obj["0"] = "zero2";
console.log(obj);
obj["test0test"] = "test";
console.log(obj.test0test);
obj.test1test = "test4";
console.log(obj);
delete obj[seckey];
console.log(obj);

const obj2 = {
  num: 10,
  method() {
    return this.num ** 2;
  },
  func: function () {
    return this.num ** 2;
  },
};

console.log(obj2.method());
console.log(obj2.func());
