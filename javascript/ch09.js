console.log("50" * 2);
console.log(Infinity.toString());
let a = undefined;
//console.log(a.value.name);

const check = false;
const falsevalue = check && "value";
const truevalue = check || "value";

const truecheck = true;
const newvalue = truecheck && "value";

function test(name) {
  let result = name && name.val;

  return result;
}
console.log(test(undefined));

function checkdefault(value) {
  value = value || "";

  return value.length;
}
console.log(checkdefault(null));

function optional(value) {
  return value?.length;
}
console.log(optional(null), optional(undefined));

console.log("" ?? "default value");
