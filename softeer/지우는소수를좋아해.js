const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = parseInt(input[0].split(" ")[0]);
let range = parseInt(input[0].split(" ")[1]);
const arr = Array.from({ length: count + 1 }, () => []);
for (let i = 1; i <= range; i++) {
  let from = parseInt(input[i].split(" ")[0]);
  let to = parseInt(input[i].split(" ")[1]);
  let val = parseInt(input[i].split(" ")[2]);

  arr[from].push([to, val]);
  arr[to].push([from, val]);
}

let checkCount = 1;
const check = Array.from({ length: count + 1 }, () => false);
const distance = Array.from({ length: count + 1 }, () => Infinity);
distance[1] = 0;
check[1] = true;
let checkidx = 1;
//console.log(arr);
while (checkCount < count) {
  let length = arr[checkidx].length;
  for (let i = 0; i < length; i++) {
    if (!check[arr[checkidx][i][0]]) {
      distance[arr[checkidx][i][0]] = Math.min(
        distance[arr[checkidx][i][0]],
        Math.max(arr[checkidx][i][1], distance[checkidx])
      );
    }
  }
  let compareidx;
  let compareval = Infinity;
  for (let i = 1; i <= count; i++) {
    if (!check[i] && compareval > distance[i]) {
      compareidx = i;
      compareval = distance[i];
    }
  }
  if (compareidx === count) break;
  checkidx = compareidx;
  check[checkidx] = true;
}
function getAnswer(num) {
  if (num === 1 && num === 2 && num === 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let result = distance[count] + 1;
while (!getAnswer(result)) result++;
console.log(result);
