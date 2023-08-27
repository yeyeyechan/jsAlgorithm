/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0;
  let len = prices.length;
  let to = prices[len - 1],
    from = prices[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (from >= prices[i] && to > prices[i]) {
      from = prices[i];
    } else {
      sum += to - from;
      to = from = prices[i];
    }
  }
  sum += to - from;
  return sum;
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0;
  let minval = Infinity;
  let len = prices.length;

  for (let i = 0; i < len; i++) {
    minval = Math.min(minval, prices[i]);
    if (prices[i] - minval > 0) {
      sum += prices[i] - minval;
      minval = prices[i];
    }
  }
  return sum;
};
