function binarySearch(arr, val) {
  arr.sort((a, b) => a - b);
  let mid;
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);

    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
