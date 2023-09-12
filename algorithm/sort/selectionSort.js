function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minindex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minindex] > arr[j]) minindex = j;
    }
    [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
  }
}

let arr = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("selectionSort");
selectionSort(arr);
console.log(arr);
console.timeEnd("selectionSort");
