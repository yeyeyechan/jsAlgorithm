/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length;
  let from = prices[0];
  let to = 0;
  let maxprofit = 0;
  for (let i = 1; i < len; i++) {
    to = prices[i];
    if (to - from < 0) from = to;
    else maxprofit = Math.max(maxprofit, to - from);
  }
  return maxprofit <= 0 ? 0 : maxprofit;
};
