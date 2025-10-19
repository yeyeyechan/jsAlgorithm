const perse = {
  name: "yechan",
  lastname: "Seo",
  get fullname() {
    return `${this.name} ${this.lastname}`;
  },
  set fullname(name) {
    [this.name, this.lastname] = name.split(" ");
  },
};
console.log(Object.getOwnPropertyDescriptor(perse, "name"));
console.log(Object.getOwnPropertyDescriptors(perse));
for (const idx in perse.fullname) {
  console.log(perse.fullname[idx]);
}
const arr = [1, 2, 3, 4, 5];
arr["a"] = "a";
for (const val of arr) {
  console.log(val);
}
const map = new Map([
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
]);
for (const val in map) {
  console.log(val);
}
console.log(Object.getOwnPropertyDescriptors(arr));

Object.defineProperty(arr, "name", {
  value: "name",
  enumerable: false,
  configurable: false,
  writable: true,
});
Object.defineProperty(arr, "nametest", {
  get() {
    return arr["name"];
  },
  set(name) {
    arr["name"] = name;
  },
  enumerable: false,
  configurable: false,
});

console.log(arr.name);
console.log(arr.nametest);
arr.nametest = "test";
console.log(arr.nametest);

function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    obj.keys().forEach((key) => deepFreeze(obj[key]));
  }
  return obj;
}
