const quickSort = (arr) => {
  const sort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;
    const pivot = arr[Math.floor((start + end) / 2)];
    const index = partition(arr, start, end, pivot);
    sort(arr, start, index - 1);
    sort(arr, index, end);
  };
  const partition = (arr, start, end, pivot) => {
    while (start <= end) {
      while (pivot > arr[start]) start++;
      while (pivot < arr[end]) end--;

      if (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    return start;
  };
  sort(arr);
};
const arr = [6, 3, 8, 5, 2, 7, 4, 1];
quickSort(arr);
console.log(arr);
