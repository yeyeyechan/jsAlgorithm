/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let cumSum = 0;
  let min = Infinity;
  let result = -1;
  const len = gas.length;
  for (let i = 1; i < len; i++) {
    cumSum += -cost[i - 1] + gas[i - 1];
    if (min > cumSum) {
      min = cumSum;
      result = i;
    }
  }
  if (cumSum < 0) return -1;
  return result;
};
(gas = [5, 1, 2, 3, 4]), (cost = [4, 4, 1, 5, 1]);
console.log(canCompleteCircuit(gas, cost));
