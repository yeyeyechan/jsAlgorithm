const test = (function () {
  let num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(test.increase());
console.log(test.increase());
console.log(test.increase());
console.log(test.decrease());
