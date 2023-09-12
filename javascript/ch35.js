const arr = [1, 4];
const arr2 = [2, 3];

arr.splice(1, 0, ...arr2);
console.log(arr);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
