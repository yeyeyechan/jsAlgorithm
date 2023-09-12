function mergeSort(arr) {
  let length = arr.length;
  if (length === 1) return arr;
  let mid = Math.floor(length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);

  return merge(left, right);
}

function merge(left, right) {
  let leftidx = 0,
    rightidx = 0;
  const result = [];
  while (leftidx < left.length && rightidx < right.length) {
    if (left[leftidx] > right[rightidx]) result.push(right[rightidx++]);
    else result.push(left[leftidx++]);
  }
  while (leftidx < left.length) result.push(left[leftidx++]);
  while (rightidx < right.length) result.push(right[rightidx++]);

  return result;
}
let arr = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("mergeSort");
mergeSort(arr);
console.timeEnd("mergeSort");

console.log(arr.slice(0, 0));
