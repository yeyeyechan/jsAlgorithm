function solution(info, n, m) {
  let a = n;
  let b = m;
  let min = 0;
  for (ele of info) {
    min = Math.min(ele[0], ele[1]);
    console.log(min);
    if (b >= min) b -= min;
    else if (a >= min) a -= min;
    else return -1;
  }
  return a;
}

const info = [
  [1, 2],
  [2, 3],
  [2, 1],
];
const n = 4;
const m = 4;
console.log(solution(info, n, m));
