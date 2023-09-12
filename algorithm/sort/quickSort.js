function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let index = partition(arr, left, right);

    if (left < index - 1) quickSort(arr, left, index - 1);

    if (index < right) quickSort(arr, index, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
let arr = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("quickSort");
quickSort(arr);
console.timeEnd("quickSort");
