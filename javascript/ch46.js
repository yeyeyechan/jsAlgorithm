function* testFun() {
  yield 1;
}
const testfunc2 = function* () {};
const obj = {
  *testfun3() {},
};
class test1 {
  *testfun4() {
    yield 1;
  }
}

const testgen = function* () {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.error(error);
  }
};

const testgenobj = testgen();

console.log(testgenobj.next());
//console.log(testgenobj.return("END!"));
console.log(testgenobj.throw("error"));
console.log(testgenobj.next());
console.log(testgenobj.next());

const fibonacci = function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
};

for (const val of fibonacci()) {
  if (val > 1000) break;
  console.log(val);
}

const fibogenerator = (function* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const val of fibogenerator) {
  if (val > 1000) break;
  console.log(val);
}

async function foo(n) {
  return n;
}
foo(3).then(console.log);
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));
async function foo2() {
  const result = await Promise.all([promise1, promise2, promise3]);
  console.log(result);
}
foo2();
