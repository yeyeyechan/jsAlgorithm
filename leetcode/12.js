/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let result = "";
  let left = num;
  let index = 1000;
  while (index >= 1) {
    let target = Math.floor(left / index);
    if (target === 4 || target === 9) {
      result += map[index] + map[(target + 1) * index];
    } else if (target === 5) {
      result += map[target * index];
    } else if (target > 0) {
      for (let i = 0; i < target; i++) result += map[index];
    }
    left = left % index;

    index = Math.floor(index / 10);
  }
  return result;
};
/*Input: num = 3749;

Output: "MMMDCCXLIX";*/
console.log(intToRoman(3749));
