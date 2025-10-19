// 병합 정렬
const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  return combineArr(leftArr, rightArr);
};
const combineArr = function (leftArr, rightArr) {
  const combined = [];

  let i = 0,
    j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      combined.push(leftArr[i]);
      i++;
    } else {
      combined.push(rightArr[j]);
      j++;
    }
  }
  //복사가 두번일어남 concat (o(n))
  //return combined.concat(leftArr.slice(i)).concat(rightArr.slice(j));
  //return [...combined , ...leftArr.slice(i) , ...rightArr.slice(j)]
  while (i < leftArr.length) combined.push(leftArr[i++]);
  while (j < rightArr.length) combined.push(rightArr[j++]);

  return combined;
};

//병합 정렬 shift 최악의 경우 o(n2)
const mergeSortInPlace = function (arr, start = 0, end = arr.length) {
  if (end - start <= 1) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortInPlace(arr, start, mid);
  mergeSortInPlace(arr, mid, end);
  combineInplace(arr, start, mid, end);
};
const combineInplace = function (arr, start, mid, end) {
  let left = start;
  let right = mid;
  while (left < mid && right < end) {
    let leftVal = arr[left];
    let rightVal = arr[right];
    if (leftVal > rightVal) {
      let index = right;
      while (index > left) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[index] = rightVal;
      right++;
      left++;
      mid++;
    } else {
      left++;
    }
  }
};

// 병합 temp buffer 개선
const mergeSortFastInPlace = function (arr) {
  const temp = new Array(arr.length);
  const sort = (arr, start = 0, end = arr.length) => {
    if (end - start <= 1) return;
    const mid = Math.floor((start + end) / 2);
    sort(arr, start, mid);
    sort(arr, mid, end);
    combineInplaceFast(arr, start, mid, end);
  };

  const combineInplaceFast = (arr, start, mid, end) => {
    let i = start,
      j = mid,
      idx = start;
    while (i < mid && j < end) {
      temp[idx++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
    }
    while (i < mid) temp[idx++] = arr[i++];
    while (j < end) temp[idx++] = arr[j++];
    for (let i = start; i < end; i++) arr[i] = temp[i];
  };
  sort(arr);
};

const arr = [6, 3, 8, 5, 2, 7, 4, 1];
mergeSortFastInPlace(arr);
console.log(arr);
const quickSort = function (arr) {};
