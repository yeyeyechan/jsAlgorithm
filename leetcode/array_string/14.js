/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0].length;
  const first = strs[0]; //인접 데이터 비교가 더성능이 좋은것 같음
  for (let i = 1; i < strs.length; i++) {
    let count = 0;
    for (let j = 0; j < strs[i].length && j < result; j++) {
      if (first.charAt(j) !== strs[i].charAt(j)) break;
      count++;
    }
    result = count;
    if (!result) break;
  }
  return strs[0].slice(0, result);
};
