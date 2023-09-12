/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  for (const word of magazine) {
    ransomNote = ransomNote.replace(word, "");
  }
  if (ransomNote.length) return false;
  return true;
};
var canConstruct = function (ransomNote, magazine) {
  const magazineArr = [];
  if (ransomNote.length > magazine.length) return false;
  magazine.split("").forEach((ele) => {
    if (!magazineArr[ele]) magazineArr[ele] = 1;
    else magazineArr[ele]++;
  });
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineArr[ransomNote[i]]) return false;
    magazineArr[ransomNote[i]]--;
  }
  return true;
};
