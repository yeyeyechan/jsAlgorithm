const namespace = {
  obj: {
    name: "kim",
  },
};
(function () {
  var a = 1;
  console.log(a);
})();

const test = (function () {
  var a = 1;
  return {
    increase() {
      return ++a;
    },
    decrease() {
      return --a;
    },
  };
})();

console.log(test.increase());
console.log(test.decrease());
