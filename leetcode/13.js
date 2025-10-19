/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length - 1; i++) {
    const cur = map[s[i]];
    const next = map[s[i + 1]];
    if (cur < next) result -= cur;
    else result += cur;
  }
  return result + map[s[s.length - 1]];
};
const s = "MCMXCIV";
console.log(romanToInt(s));
