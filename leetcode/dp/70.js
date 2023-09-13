/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = [];
  result[1] = 1;
  result[2] = 2;

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let firstStep = 1;

  let secondStep = 1;

  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {
    thirdStep = firstStep + secondStep;

    firstStep = secondStep;

    secondStep = thirdStep;
  }
  return thirdStep;
};
