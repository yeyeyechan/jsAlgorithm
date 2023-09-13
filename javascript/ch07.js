console.log(+true);
console.log(-false);
console.log(1 - false);
console.log(+undefined);
console.log(5 == "5");
console.log(+"");
console.log(Number.isNaN(NaN));
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(Object.is(NaN, NaN));

const result = true ? 11 : -1;

console.log(result);
let a = (b = c = 10);
console.log(a, b, c);
console.log(1 / +0 === 1 / -0);
console.log(+0 === -0);

console.log((a = 3), (b = 2), (c = 10));
