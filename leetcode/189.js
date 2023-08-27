/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  k %= len;
  let index = 0;

  while (index++ < k) {
    let before = nums[len - 1];
    for (let i = 0; i < len; i++) {
      let current = nums[i];
      nums[i] = before;
      before = current;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  k %= len;

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
  function reverse(nums, start, to) {
    let toidx = to;
    for (let i = start; i < (start + to) / 2; i++) {
      [nums[i], nums[toidx]] = [nums[toidx], nums[i]];
      toidx--;
    }
  }
};
