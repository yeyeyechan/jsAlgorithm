const set = new Set();

const uniqFilter = (arr) => arr.filter((ele, idx, _) => _.indexOf(ele) === idx);
const uniqSet = (arr) => [...new Set(arr)];

const testex = [1, 1, 1, 3, 45, 5, 3, 2, 2, 2, 4];
console.log(uniqFilter(testex));
console.log(uniqSet(testex));

const set2 = new Set(testex);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, "size"));
set2.size = 100;
console.log(set2.size);

console.log(NaN === NaN);
set2.add(NaN).add(NaN);

console.log(set2);
console.log(set2.has(NaN));

set2.delete(NaN);
console.log(set2);
set2.clear();
console.log(set2);

const set3 = new Set(testex);

for (const val of set3) {
  console.log(val);
}
for (const prop in set3) {
  console.log("prop");
  console.log(prop);
}
set3.forEach((ele, ele2, set) => console.log(ele, ele2, set));

console.log(Symbol.iterator in set3);

const [test1, ...rest] = set3;
console.log(test1, rest);

console.log([...set3]);
set3.add(45);
console.log([...set3]);

Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};
Set.prototype.union2 = function (set) {
  const result = new Set(this);
  set.forEach((ele) => {
    if (!this.has(ele)) result.add(ele);
  });
  return result;
};

Set.prototype.intersection = function (set) {
  const result = new Set();
  for (const val of set) {
    if (this.has(val)) result.add(val);
  }
  return result;
};
Set.prototype.intersection1 = function (set) {
  return new Set([...set].filter((ele) => this.has(ele)));
};

Set.prototype.difference = function (set) {
  const result = new Set(this);
  for (const val of set) {
    if (this.has(val)) result.delete(val);
  }
  return result;
};
Set.prototype.difference1 = function (set) {
  return new Set([...this].filter((val) => !set.has(val)));
};
Set.prototype.isSuperSet = function (set) {
  for (const val of set) {
    if (!this.has(val)) return false;
  }
  return true;
};
Set.prototype.isSuperSet = function (set) {
  return [...set].every((ele) => this.has(ele));
  //retuurn [...set].every((ele) => [...this].includes(ele))
};
const ex1 = new Set([1, 3, 4, 5, 6, 7]);
const ex2 = new Set([6, 7, 8, 45, 23, 43]);
console.log(ex1.union(ex2));
console.log(ex1.union2(ex2));
console.log(ex1.intersection(ex2));
console.log(ex1.intersection1(ex2));
console.log(ex1.difference(ex2));
console.log(ex1.difference1(ex2));

const sym = Symbol(" ");
const obj = {
  [{}]: 1,
  [sym]: 2,
  sym: 2,
  [[1, 2, 3]]: 3,
};
console.log(Object.getOwnPropertyDescriptors(obj));
for (const prop in obj) {
  console.log(prop);
}
console.log(ex2, ex2[3]);

const map = new Map([
  ["key", 1],
  ["key2", 2],
  ["key", 2],
]);
console.log(map);
for (const entry of map) {
  console.log(entry);
}

map.delete("key");
map.set("key", 2);
console.log(map);
for (const entry of map) {
  console.log(entry);
}
console.log(map.size);
map.clear();
console.log(map);
const map2 = new Map([
  ["key", 1],
  ["key2", 2],
  ["key", 2],
]);
console.log(...map2);
for (const key of map2.keys()) {
  console.log(key);
  //onsole.log(key.next());
}
for (const val of map2.values()) {
  console.log(val);
  //onsole.log(key.next());
}
for (const entry of map2.entries()) {
  console.log(entry);
  //onsole.log(key.next());
}
