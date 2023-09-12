const str = new String(null);
console.log(str);
str[1] = "2";
console.log(str);

console.log(str.indexOf("n"));
console.log(str.includes("n"));
console.log(str.startsWith("n"));
console.log(str.endsWith("l", 5));
console.log(str.charAt(0));
console.log(str.substring(0, 1));
console.log(str.substring(1));
console.log(str.slice(0, 3));
console.log(str.substring(-3, 5));
console.log(str.slice(-4, 5));
console.log(str.slice(-4));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const trimstr = " test ";
console.log(trimstr.trim());
console.log(trimstr.trimStart());
console.log(trimstr.trimEnd());

console.log(trimstr.replace(/\s/g, ""));
console.log(trimstr.replace(/^\s/g, ""));
console.log(trimstr.replace(/\s$/g, ""));

console.log(trimstr.repeat(0));
console.log(trimstr.repeat(3));
console.log(trimstr.repeat(3.5));
//console.log(trimstr.repeat(-3));

function camalToSnake(str) {
  return str.replace(/.[A-Z]/g, (ele) => ele[0] + "_" + ele[1].toLowerCase());
}
console.log(camalToSnake("testTest"));

function snakeToCamel(str) {
  return str.replace(/_[a-z]/g, (ele) => ele[1].toUpperCase());
}
console.log(snakeToCamel("test_test"));

const splitstr = "split test is started";

console.log(splitstr.split(""));
console.log(splitstr.split(" "));
console.log(splitstr.split());
console.log(splitstr.split("").reverse().join());
console.log(splitstr.split("").reverse().join(""));
