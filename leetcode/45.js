/**
 * @param {number[]} nums
 * @return {number}
 */
var jump_dfs = function (nums) {
  let answer = Infinity;
  const compare = Array(nums.length).fill(Infinity);
  function dfs(index, count, answer) {
    if (index === 0 && nums.length === 1) return 0;
    compare[index] = count;
    for (let jump = nums[index]; jump > 0; jump--) {
      if (count + 1 >= compare[index + jump] || count + 1 >= answer) continue;
      if (index + jump >= nums.length - 1) {
        return Math.min(count + 1, answer);
      }
      answer = Math.min(answer, dfs(index + jump, count + 1, answer));
    }
    return answer;
  }
  return dfs(0, 0, answer);
};
var jump = function (nums) {
  let jump = 0;
  let far = 0;
  let curEnd = 0;
  for (let idx = 0; idx < nums.length - 1; idx++) {
    far = Math.max(far, idx + nums[idx]);
    if (idx === curEnd) {
      jump++;
      curEnd = far;
    }
  }
  return jump;
};
const nums = [
  5, 8, 1, 8, 9, 8, 7, 1, 7, 5, 8, 6, 5, 4, 7, 3, 9, 9, 0, 6, 6, 3, 4, 8, 0, 5,
  8, 9, 5, 3, 7, 2, 1, 8, 2, 3, 8, 9, 4, 7, 6, 2, 5, 2, 8, 2, 7, 9, 3, 7, 6, 9,
  2, 0, 8, 2, 7, 8, 4, 4, 1, 1, 6, 4, 1, 0, 7, 2, 0, 3, 9, 8, 7, 7, 0, 6, 9, 9,
  7, 3, 6, 3, 4, 8, 6, 4, 3, 3, 2, 7, 8, 5, 8, 6, 0,
];
console.log(jump(nums));
