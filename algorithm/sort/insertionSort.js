function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}
let arr = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("insertionSort");
insertionSort(arr);
console.timeEnd("insertionSort");
