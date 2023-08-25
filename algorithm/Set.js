const set = new Set();
const set2 = new Set();
const names = ["jack", "jack", "mike", "john", "mikey", "jay"];
names.forEach((ele) => {
  set.add(ele);
  set2.add(ele);
});
console.log(names.length);
console.log(set.size);
set.delete("jack");
set.delete("mike");
console.log(set.has("jack"));
console.log(set.values());
