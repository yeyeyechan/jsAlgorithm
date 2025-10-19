console.log(null == undefined);
console.log(null === undefined);
console.log(NaN === NaN);

var person = {
  name: "test",
};
var copy = person;
console.log(person === copy);

copy["name"] = "test2";

console.log(person === copy);
