let test = {
  a: 11,
  b: function () {
    console.log("b");
  },
  c() {
    console.log("c");
  },
};

console.log(test.b.hasOwnProperty("prototype"));
console.log(test.c.hasOwnProperty("prototype"));
console.log(String.hasOwnProperty("prototype"));
console.log(String.prototype.concat.hasOwnProperty("prototype"));

const base = {
  a: 11,
  b(param) {
    return `base b ${param}`;
  },
};
const newbase = {
  __proto__: base,
  c() {
    return `${super.b("newbase")}`;
  },
};

console.log(newbase.c());

const newbase2 = {
  __proto__: base,
  c: function () {
    // return `${super.b("newbase")}`;
  },
};
//console.log(newbase2.c());

const arrow = (a, b) => ({ a: 1 });
console.log(arrow());

const iffe = ((name) => ({
  sayHi() {
    return name;
  },
}))("name");
console.log(iffe.sayHi());

[1, 2, 3].forEach(function (e) {
  console.log(e);
});
[1, 2, 3].forEach((ele) => {
  console.log(ele);
});
