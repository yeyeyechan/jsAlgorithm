function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
let arr = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("bubblesort");
bubbleSort(arr);
console.log(arr);
console.timeEnd("bubblesort");
function fixedBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
let arr2 = [
  1, 4, 5, 63, 1, 4, 56, 72, 34, 67, 2, 213543, 2, 1, 4, 66, 1, 3, 677, 4, 233,
  53, 7, 4, 53, 6353, 4, 6,
];
console.time("fixedbubble");
fixedBubbleSort(arr2);
console.log(arr2);
console.timeEnd("fixedbubble");
